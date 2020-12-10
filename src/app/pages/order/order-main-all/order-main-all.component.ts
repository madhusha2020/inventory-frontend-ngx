import {Component, OnInit} from '@angular/core';
import {OrderControllerService, OrderList} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-order-main-all',
  templateUrl: './order-main-all.component.html',
  styleUrls: ['./order-main-all.component.scss']
})
export class OrderMainAllComponent implements OnInit {

  offset = 0;
  limit = 100;

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
      saleId: {
        title: 'Sale#',
        type: 'number',
      },
      dosold: {
        title: 'Sold Date',
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
    this.fetchAllOrders();
  }

  fetchAllOrders() {
    this.orderControllerService.getAllOrdersUsingGET().subscribe(response => {
      console.log('All Orders Data :', response);
      response.orders.forEach(order => {
        order.statusDescription = ServiceUtil.getStatusDescription(order.status);
        order.saleId = order.sale.id;
        this.orderLists.push(order);
      });
      this.source.load(this.orderLists);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/order/main-view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}
