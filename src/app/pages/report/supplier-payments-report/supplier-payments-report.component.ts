import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReportControllerService, ReportRequest, SupplierPayment} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {ServiceUtil} from '../../../service/util/service-util';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-supplier-payments-report',
  templateUrl: './supplier-payments-report.component.html',
  styleUrls: ['./supplier-payments-report.component.scss']
})
export class SupplierPaymentsReportComponent implements OnInit {

  reportForm: FormGroup;
  reportRequest: ReportRequest = {};

  supplierID = 0;
  paymentList: Array<SupplierPayment> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    pager: {
      display: true,
      perPage: 7
    },
    columns: {
      id: {
        title: 'Payment#',
        type: 'number',
      },
      purchaseOrderId: {
        title: 'Purchase Order#',
        type: 'string',
      },
      date: {
        title: 'Payment Date',
        type: 'string',
      },
      paymentTotal: {
        title: 'Amount',
        type: 'number',
      },
      ref: {
        title: 'Reference',
        type: 'string',
      },
      chequeno: {
        title: 'Cheque No',
        type: 'string',
      },
      chequebank: {
        title: 'Cheque Bank',
        type: 'string',
      },
      chequebranch: {
        title: 'Cheque Branch',
        type: 'string',
      },
      chequedate: {
        title: 'Cheque Date',
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
    this.paymentList = [];
    this.reportControllerService.supplierPaymentReportUsingPOST({
      supplierId: this.supplierID,
      fromDate: this.fromDate.value,
      toDate: this.toDate.value
    }).subscribe(response => {
      console.log('Payments :', response);
      response.supplierPaymentList.forEach(payment => {
        payment.paymentTotal = payment.amount.toLocaleString('en-US', {style: 'currency', currency: 'LKR'});
        payment.statusDescription = ServiceUtil.getStatusDescription(payment.status);
        this.paymentList.push(payment);
      });
      this.source.load(this.paymentList);
    });
  }

  downloadCSV() {
    if (this.paymentList.length > 0) {
      const options = {
        fieldSeparator: ',',
        quoteStrings: '',
        decimalseparator: '.',
        showLabels: true,
        showTitle: true,
        useBom: true,
        title: 'Supplier Payment Report',
        headers: [
          'Payment#',
          'Purchase Order#',
          'Payment Date',
          'Amount',
          'Reference',
          'Cheque No',
          'Cheque Bank',
          'Cheque Branch',
          'Cheque Date',
          'Status',
        ],
      };

      let customerPayments: Array<CustomerPaymentReport> = [];
      this.paymentList.forEach(payment => {
        customerPayments.push({
          paymentId: payment.id,
          purchaseOrderId: payment.purchaseOrderId,
          paymentDate: payment.date,
          amount: payment.amount,
          reference: payment.ref,
          chequeNo: payment.chequeno,
          chequeBank: payment.chequebank,
          chequeBranch: payment.chequebranch,
          chequeDate: payment.chequedate,
          status: payment.statusDescription
        });
      });

      new Angular5Csv(customerPayments, 'supplier-payment-report', options);
    } else {
      Swal.fire('Error', 'Please generate report first', 'error');
    }
  }
}

interface CustomerPaymentReport {
  paymentId: number;
  purchaseOrderId: number;
  paymentDate: string;
  amount: number;
  reference: string;
  chequeNo: string;
  chequeBank: string;
  chequeBranch: string;
  chequeDate: string;
  status: string;
}
