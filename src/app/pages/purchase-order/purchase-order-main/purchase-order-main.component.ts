import {Component, OnInit} from '@angular/core';
import {PurchaseOrder, PurchaseOrderControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-purchase-order-main',
  templateUrl: './purchase-order-main.component.html',
  styleUrls: ['./purchase-order-main.component.scss']
})
export class PurchaseOrderMainComponent implements OnInit {

  offset = 0;
  limit = 100;

  orderLists: Array<PurchaseOrder> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
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
      doreceived: {
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

  constructor(private purchaseOrderControllerService: PurchaseOrderControllerService,
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
    this.fetchAllPurchaseOrders();
  }

  fetchAllPurchaseOrders() {
    this.purchaseOrderControllerService.getAllPurchaseOrdersUsingGET().subscribe(response => {
      console.log('All Purchase Orders Data :', response);
      response.purchaseOrders.forEach(order => {
        order.statusDescription = ServiceUtil.getStatusDescription(order.status);
        this.orderLists.push(order);
      });
      this.source.load(this.orderLists);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/purchase-order/view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}
