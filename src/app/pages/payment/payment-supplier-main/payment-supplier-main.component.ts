import {Component, OnInit} from '@angular/core';
import {SupplierPayment, SupplierPaymentControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-payment-supplier-main',
  templateUrl: './payment-supplier-main.component.html',
  styleUrls: ['./payment-supplier-main.component.scss']
})
export class PaymentSupplierMainComponent implements OnInit {

  offset = 0;
  limit = 100;

  paymentList: Array<SupplierPayment> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
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

  constructor(private supplierPaymentControllerService: SupplierPaymentControllerService,
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
    this.supplierPaymentControllerService.getAllSupplierPaymentsUsingGET().subscribe(response => {
      console.log('Supplier payment Data :', response);
      response.supplierPaymentList.forEach(payment => {
        payment.paymentTotal = payment.amount.toLocaleString('en-US', {style: 'currency', currency: 'LKR'});
        payment.statusDescription = ServiceUtil.getStatusDescription(payment.status);
        this.paymentList.push(payment);
      });
      this.source.load(this.paymentList);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/payment/supplier-view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}
