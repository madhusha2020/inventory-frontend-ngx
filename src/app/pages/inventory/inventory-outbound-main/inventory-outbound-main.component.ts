import { Component, OnInit } from '@angular/core';
import {
  ProductOutbound,
  ProductOutboundControllerService
} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-inventory-outbound-main',
  templateUrl: './inventory-outbound-main.component.html',
  styleUrls: ['./inventory-outbound-main.component.scss']
})
export class InventoryOutboundMainComponent implements OnInit {

  productOutbounds: Array<ProductOutbound> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      id: {
        title: '#Outbound',
        type: 'number',
      },
      date: {
        title: 'Outbound Date',
        type: 'string',
      },
      statusDescription: {
        title: 'Status',
        type: 'string',
      },
      itemCount: {
        title: 'Item Count',
        type: 'number',
        addable: false,
        editable: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private productOutboundControllerService: ProductOutboundControllerService,
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
    this.fetchProductOutbound();
  }

  fetchProductOutbound() {
    this.productOutboundControllerService.getAllProductOutboundsUsingGET().subscribe(response => {
      console.log('Product Outbound Data :', response);
      response.productOutboundList.forEach(productOutbound => {
        productOutbound.statusDescription = ServiceUtil.getStatusDescription(productOutbound.status);
        productOutbound.itemCount = productOutbound.productOutboundItems.length;
        this.productOutbounds.push(productOutbound);
      });
      this.source.load(this.productOutbounds);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/inventory/outbound-view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}
