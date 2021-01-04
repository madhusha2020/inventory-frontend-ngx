import {Component, OnInit} from '@angular/core';
import {ProductInbound, ProductInboundControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-inventory-inbound-main',
  templateUrl: './inventory-inbound-main.component.html',
  styleUrls: ['./inventory-inbound-main.component.scss']
})
export class InventoryInboundMainComponent implements OnInit {

  productInbounds: Array<ProductInbound> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      id: {
        title: 'Inbound#',
        type: 'number',
      },
      date: {
        title: 'Inbound Date',
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

  constructor(private productInboundControllerService: ProductInboundControllerService,
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
    this.fetchProductInbound();
  }

  fetchProductInbound() {
    this.productInboundControllerService.getAllProductInboundsUsingGET().subscribe(response => {
      console.log('Product Inbound Data :', response);
      response.productInboundList.forEach(productInbound => {
        productInbound.statusDescription = ServiceUtil.getStatusDescription(productInbound.status);
        productInbound.itemCount = productInbound.productInboundItems.length;
        this.productInbounds.push(productInbound);
      });
      this.source.load(this.productInbounds);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/inventory/inbound-view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}
