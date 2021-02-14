import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PurchaseOrder, ReportControllerService, ReportRequest} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {ServiceUtil} from '../../../service/util/service-util';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-purchase-orders-report',
  templateUrl: './purchase-orders-report.component.html',
  styleUrls: ['./purchase-orders-report.component.scss']
})
export class PurchaseOrdersReportComponent implements OnInit {

  reportForm: FormGroup;
  reportRequest: ReportRequest = {};

  supplierID = 0;
  purchaseOrderList: Array<PurchaseOrder> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    pager: {
      display: true,
      perPage: 7
    },
    columns: {
      id: {
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
      doordered: {
        title: 'Order Date',
        type: 'string',
      },
      dorequired: {
        title: 'Required Date',
        type: 'string',
      },
      dorecived: {
        title: 'Received Date',
        type: 'string',
      },
      supplierName: {
        title: 'Supplier Name',
        type: 'string',
      },
      supplierType: {
        title: 'Supplier Type',
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

  get fromDate() {
    return this.reportForm.get('fromDate');
  }

  get toDate() {
    return this.reportForm.get('toDate');
  }

  ngOnInit(): void {
    this.reportForm = this.formBuilder.group({
      supplierId: [null],
      fromDate: [null, [Validators.required]],
      toDate: [null, [Validators.required]],
    });
  }

  supplierStateChange(event) {
    console.log('Supplier state change : ', event);
    this.supplierID = event;
  }

  generate() {
    this.purchaseOrderList = [];
    this.reportControllerService.purchaseOrderReportUsingPOST({
      supplierId: this.supplierID,
      fromDate: this.fromDate.value,
      toDate: this.toDate.value
    }).subscribe(response => {
      console.log('Purchase Orders :', response);
      response.purchaseOrderList.forEach(purchaseOrder => {
        purchaseOrder.statusDescription = ServiceUtil.getStatusDescription(purchaseOrder.status);
        this.purchaseOrderList.push(purchaseOrder);
      });
      this.source.load(this.purchaseOrderList);
    });
  }

  downloadCSV() {
    if (this.purchaseOrderList.length > 0) {
      const options = {
        fieldSeparator: ',',
        quoteStrings: '',
        decimalseparator: '.',
        showLabels: true,
        showTitle: true,
        useBom: true,
        title: 'Purchase Order Report',
        headers: [
          'Purchase Order#',
          'Code',
          'Description',
          'Order Date',
          'Required Date',
          'Received Date',
          'Supplier Name',
          'Supplier Type',
          'Status',
        ],
      };

      let purchaseOrders: Array<PurchaseOrderReport> = [];
      this.purchaseOrderList.forEach(purchaseOrder => {
        purchaseOrders.push({
          purchaseOrderId: purchaseOrder.id,
          code: purchaseOrder.code,
          description: purchaseOrder.description,
          orderDate: purchaseOrder.doordered,
          requiredDate: purchaseOrder.dorequired,
          receivedDate: purchaseOrder.dorecived,
          supplierName: purchaseOrder.supplierName,
          supplierType: purchaseOrder.supplierType,
          status: purchaseOrder.statusDescription
        });
      });

      new Angular5Csv(purchaseOrders, 'purchase-order-report', options);
    } else {
      Swal.fire('Error', 'Please generate report first', 'error');
    }
  }
}

interface PurchaseOrderReport {
  purchaseOrderId: number;
  code: string;
  description: string;
  orderDate: string;
  requiredDate: string;
  receivedDate: string;
  supplierName: string;
  supplierType: string;
  status: string;
}
