import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReportControllerService, ReportRequest, SupplierRefund, SupplierReturn} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {ServiceUtil} from '../../../service/util/service-util';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-supplier-refunds-report',
  templateUrl: './supplier-refunds-report.component.html',
  styleUrls: ['./supplier-refunds-report.component.scss']
})
export class SupplierRefundsReportComponent implements OnInit {

  reportForm: FormGroup;
  reportRequest: ReportRequest = {};

  refundList: Array<SupplierRefund> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    pager: {
      display: true,
      perPage: 7
    },
    columns: {
      id: {
        title: 'Refund#',
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
      refundTotal: {
        title: 'Refund Total',
        type: 'string',
      },
      refundItemCount: {
        title: 'Item Count',
        type: 'number',
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

  generate() {
    this.refundList = [];
    this.reportControllerService.supplierRefundReportUsingPOST({
      fromDate: this.fromDate.value,
      toDate: this.toDate.value
    }).subscribe(response => {
      console.log('Supplier Refunds :', response);
      response.supplierRefundList.forEach(refund => {
        refund.refundTotal = refund.amount.toLocaleString('en-US', {style: 'currency', currency: 'LKR'});
        refund.refundItemCount = refund.supplierRefundInventories.length;
        refund.statusDescription = ServiceUtil.getStatusDescription(refund.status);
        this.refundList.push(refund);
      });
      this.source.load(this.refundList);
    });
  }

  downloadCSV() {
    if (this.refundList.length > 0) {
      const options = {
        fieldSeparator: ',',
        quoteStrings: '',
        decimalseparator: '.',
        showLabels: true,
        showTitle: true,
        useBom: true,
        title: 'Supplier Refund Report',
        headers: [
          'Refund#',
          'Code',
          'Description',
          'Date',
          'Refund Total',
          'Item Count',
          'Status',
        ],
      };

      let supplierRefunds: Array<SupplierRefundReport> = [];
      this.refundList.forEach(supplierRefund => {
        supplierRefunds.push({
          refundId: supplierRefund.id,
          code: supplierRefund.code,
          description: supplierRefund.description,
          date: supplierRefund.date,
          refundTotal: supplierRefund.refundTotal,
          itemCount: supplierRefund.refundItemCount,
          status: supplierRefund.statusDescription
        });
      });

      new Angular5Csv(supplierRefunds, 'supplier-refund-report', options);
    } else {
      Swal.fire('Error', 'Please generate report first', 'error');
    }
  }
}

interface SupplierRefundReport {
  refundId: number;
  code: string;
  description: string;
  date: string;
  refundTotal: string;
  itemCount: number;
  status: string;
}
