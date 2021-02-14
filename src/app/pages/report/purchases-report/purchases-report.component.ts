import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Purchase, ReportControllerService, ReportRequest} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {ServiceUtil} from '../../../service/util/service-util';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-purchases-report',
  templateUrl: './purchases-report.component.html',
  styleUrls: ['./purchases-report.component.scss']
})
export class PurchasesReportComponent implements OnInit {

  reportForm: FormGroup;
  reportRequest: ReportRequest = {};

  supplierID = 0;
  itemID = 0;
  purchaseList: Array<Purchase> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    pager: {
      display: true,
      perPage: 7
    },
    columns: {
      id: {
        title: 'Purchase#',
        type: 'number',
      },
      purchaseOrderId: {
        title: 'Purchase Order#',
        type: 'number',
      },
      code: {
        title: 'Code',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      date: {
        title: 'Date',
        type: 'string',
      },
      purchaseTotal: {
        title: 'Purchase Total',
        type: 'string',
      },
      statusDescription: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private formBuilder: FormBuilder,
              private reportControllerService: ReportControllerService) {
  }

  get supplierId() {
    return this.reportForm.get('supplierId');
  }

  get itemId() {
    return this.reportForm.get('itemId');
  }

  get fromDate() {
    return this.reportForm.get('fromDate');
  }

  get toDate() {
    return this.reportForm.get('toDate');
  }

  ngOnInit(): void {
    this.reportForm = this.formBuilder.group({
      supplierId: [null],
      itemId: [null],
      fromDate: [null, [Validators.required]],
      toDate: [null, [Validators.required]],
    });
  }

  supplierStateChange(event) {
    console.log('Supplier state change : ', event);
    this.supplierID = event;
  }

  itemStateChange(event) {
    console.log('Item state change : ', event);
    this.itemID = event;
  }

  generate() {
    this.purchaseList = [];
    this.reportControllerService.purchaseReportUsingPOST({
      supplierId: this.supplierID,
      itemId: this.itemID,
      fromDate: this.fromDate.value,
      toDate: this.toDate.value
    }).subscribe(response => {
      console.log('Purchases :', response);
      response.purchaseList.forEach(purchase => {
        purchase.purchaseTotal = purchase.total.toLocaleString('en-US', {style: 'currency', currency: 'LKR'});
        purchase.purchaseOrderId = purchase.purchaseOrder.id;
        purchase.statusDescription = ServiceUtil.getStatusDescription(purchase.status);
        this.purchaseList.push(purchase);
      });
      this.source.load(this.purchaseList);
    });
  }

  downloadCSV() {
    if (this.purchaseList.length > 0) {
      const options = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        showTitle: true,
        useBom: true,
        title: 'Purchase Report',
        headers: [
          'Purchase#',
          'Purchase Order#',
          'Code',
          'Description',
          'Date',
          'Purchase Total',
          'Status',
        ],
      };

      let purchases: Array<PurchaseReport> = [];
      this.purchaseList.forEach(purchase => {
        purchases.push({
          purchaseId: purchase.id,
          purchaseOrderId: purchase.purchaseOrderId,
          code: purchase.code,
          description: purchase.description,
          date: purchase.date,
          purchaseTotal: purchase.purchaseTotal,
          status: purchase.statusDescription
        });
      });

      new Angular5Csv(purchases, 'purchase-report', options);
    } else {
      Swal.fire('Error', 'Please generate report first', 'error');
    }
  }
}

interface PurchaseReport {
  purchaseId: number;
  purchaseOrderId: number;
  code: string;
  description: string;
  date: string;
  purchaseTotal: string;
  status: string;
}
