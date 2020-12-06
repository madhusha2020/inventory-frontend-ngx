import { Component, OnInit } from '@angular/core';
import {
  OrderControllerService,
  OrderList,
  TransactionRequest
} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';
import {TokenService} from '../../../service/auth/token.service';

@Component({
  selector: 'ngx-order-main',
  templateUrl: './order-main.component.html',
  styleUrls: ['./order-main.component.scss']
})
export class OrderMainComponent implements OnInit {

  offset = 0;
  limit = 100;

  transactionRequest: TransactionRequest = {};
  orderLists: Array<OrderList> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      id: {
        title: 'Order#',
        type: 'number',
      },
      doordered: {
        title: 'Order Date',
        type: 'string',
      },
      name: {
        title: 'Customer Name',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      contact1: {
        title: 'Contact',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
      statusDescription: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private orderControllerService: OrderControllerService,
              private searchService: NbSearchService,
              private tokenService: TokenService,
              private router: Router) {

    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        console.log('Search', data.term);
        this.source.setFilter([
          {
            field: 'name',
            search: data.term
          }
        ], false);
      });
  }

  ngOnInit(): void {
    this.transactionRequest.email = this.tokenService.getUserName();
    this.fetchCustomerOrders();
  }

  fetchCustomerOrders() {
    this.orderControllerService.getOrdersByCustomerUsingPOST(this.transactionRequest).subscribe(response => {
      console.log('All Orders Data :', response);
      response.orders.forEach(order => {
        order.statusDescription = ServiceUtil.getStatusDescription(order.status);
        this.orderLists.push(order);
      });
      this.source.load(this.orderLists);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/order/view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}
