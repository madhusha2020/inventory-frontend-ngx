import {Component, OnInit} from '@angular/core';
import {Item, ItemControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-item-main',
  templateUrl: './item-main.component.html',
  styleUrls: ['./item-main.component.scss']
})
export class ItemMainComponent implements OnInit {

  offset = 0;
  limit = 100;

  items: Array<Item> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      code: {
        title: 'Item Code',
        type: 'string',
      },
      name: {
        title: 'Chemical Name',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      spriceValue: {
        title: 'Price',
        type: 'string',
      },
      lastpriceValue: {
        title: 'Last Price',
        type: 'string',
      },
      dangerlevel: {
        title: 'Danger Level',
        type: 'string',
      },
      testperiod: {
        title: 'Test Period',
        type: 'string',
      },
      unit: {
        title: 'Unit',
        type: 'string',
      },
      statusDescription: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private itemControllerService: ItemControllerService,
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
    this.fetchItems();
  }

  fetchItems() {
    this.itemControllerService.getAllItemsUsingGET(this.offset, this.limit).subscribe(response => {
      console.log('Item Data :', response);
      response.itemList.forEach(item => {
        if (item.status == 1) {
          item.statusDescription = 'Active';
        } else {
          item.statusDescription = 'Inactive';
        }
        item.spriceValue = item.sprice.toLocaleString('en-US', {style: 'currency', currency: 'LKR'});
        item.lastpriceValue = item.lastprice.toLocaleString('en-US', {style: 'currency', currency: 'LKR'});
        this.items.push(item);
      });
      this.source.load(this.items);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/item/view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}
