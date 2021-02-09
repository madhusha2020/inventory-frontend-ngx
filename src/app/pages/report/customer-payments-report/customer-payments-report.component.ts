import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerPayment, ReportControllerService, ReportRequest} from '../../../service/rest';
import {ServiceUtil} from '../../../service/util/service-util';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import Swal from 'sweetalert2';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'ngx-customer-payments-report',
  templateUrl: './customer-payments-report.component.html',
  styleUrls: ['./customer-payments-report.component.scss']
})
export class CustomerPaymentsReportComponent implements OnInit {

  reportForm: FormGroup;
  reportRequest: ReportRequest = {};

  customerID = 0;
  paymentList: Array<CustomerPayment> = [];

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
      saleId: {
        title: 'Sale#',
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

  get customerId() {
    return this.reportForm.get('customerId');
  }

  get fromDate() {
    return this.reportForm.get('fromDate');
  }

  get toDate() {
    return this.reportForm.get('toDate');
  }

  ngOnInit(): void {
    this.reportForm = this.formBuilder.group({
      customerId: [null],
      fromDate: [null, [Validators.required]],
      toDate: [null, [Validators.required]],
    });
  }

  customerStateChange(event) {
    console.log('Customer state change : ', event);
    this.customerID = event;
  }

  generate() {
    this.paymentList = [];
    this.reportControllerService.customerPaymentReportUsingPOST({
      customerId: this.customerID,
      fromDate: this.fromDate.value,
      toDate: this.toDate.value
    }).subscribe(response => {
      console.log('Payments :', response);
      response.customerPaymentList.forEach(payment => {
        payment.saleId = payment.sale.id;
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
        title: 'Customer Payment Report',
        headers: [
          'Payment#',
          'Sale#',
          'Payment Date',
          'Amount',
          'Reference',
          'Status',
        ],
      };

      let customerPayments: Array<CustomerPaymentReport> = [];
      this.paymentList.forEach(payment => {
        customerPayments.push({
          paymentId: payment.id,
          saleId: payment.saleId,
          paymentDate: payment.date,
          amount: payment.amount,
          reference: payment.ref,
          status: payment.statusDescription
        });
      });

      new Angular5Csv(customerPayments, 'customer-payment-report', options);
    } else {
      Swal.fire('Error', 'Please generate report first', 'error');
    }
  }
}

interface CustomerPaymentReport {
  paymentId: number;
  saleId: number;
  paymentDate: string;
  amount: number;
  reference: string;
  status: string;
}
