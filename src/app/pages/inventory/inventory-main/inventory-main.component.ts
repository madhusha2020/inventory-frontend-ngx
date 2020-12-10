import { Component, OnInit } from '@angular/core';
import {
  Inventory,
  InventoryControllerService,
  ProductOutbound,
  ProductOutboundControllerService
} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-inventory-main',
  templateUrl: './inventory-main.component.html',
  styleUrls: ['./inventory-main.component.scss']
})
export class InventoryMainComponent implements OnInit {

  inventories: Array<Inventory> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      id: {
        title: '#Inventroy',
        type: 'number',
      },
      code: {
        title: 'Item Code',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      doexpire: {
        title: 'Expire Date',
        type: 'string',
      },
      initqty: {
        title: 'Initial Qty',
        type: 'number',
      },
      qty: {
        title: 'Available Qty',
        type: 'number',
      },
      statusDescription: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private inventoryControllerService: InventoryControllerService,
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
    this.fetchInventories();
  }

  fetchInventories() {
    this.inventoryControllerService.getAllItemsUsingGET().subscribe(response => {
      console.log('Inventory Data :', response);
      response.inventoryList.forEach(inventory => {
        inventory.statusDescription = ServiceUtil.getStatusDescription(inventory.status);
        this.inventories.push(inventory);
      });
      this.source.load(this.inventories);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    // this.router.navigate(['/pages/inventory/view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}

