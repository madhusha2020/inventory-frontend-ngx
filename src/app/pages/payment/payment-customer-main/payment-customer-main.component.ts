import {Component, OnInit} from '@angular/core';
import {CustomerPayment, CustomerPaymentControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-payment-customer-main',
  templateUrl: './payment-customer-main.component.html',
  styleUrls: ['./payment-customer-main.component.scss']
})
export class PaymentCustomerMainComponent implements OnInit {

  offset = 0;
  limit = 100;

  paymentList: Array<CustomerPayment> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
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

  constructor(private customerPaymentControllerService: CustomerPaymentControllerService,
              private searchService: NbSearchService,
              private router: Router) {

    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        console.log('Search', data.term);
        this.source.setFilter([
          {
            field: 'ref',
            search: data.term
          }
        ], false);
      });
  }

  ngOnInit(): void {
    this.fetchCustomerPayments();
  }

  fetchCustomerPayments() {
    this.customerPaymentControllerService.getAllCustomerPaymentsUsingGET().subscribe(response => {
      console.log('Customer payment Data :', response);
      response.customerPaymentList.forEach(payment => {
        payment.saleId = payment.sale.id;
        payment.paymentTotal = payment.amount.toLocaleString('en-US', {style: 'currency', currency: 'LKR'});
        payment.statusDescription = ServiceUtil.getStatusDescription(payment.status);
        this.paymentList.push(payment);
      });
      this.source.load(this.paymentList);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/payment/customer-view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}
