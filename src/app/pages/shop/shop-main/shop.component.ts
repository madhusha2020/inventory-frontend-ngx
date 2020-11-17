import {Component, OnInit} from '@angular/core';
import {Item, ItemControllerService} from '../../../service/rest';

@Component({
  selector: 'ngx-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  offset = 0;
  limit = 100;

  items: Array<Item> = [];
  itemArray: Array<Item> = [];
  itemArrayList: Array<Array<Item>> = new Array<Array<Item>>();

  constructor(private itemControllerService: ItemControllerService) {
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
        item.inventories.forEach(inventory => {
          if (inventory) {
            item.avalableQty = inventory.qty;
          }
        });

        this.items.push(item);
        this.itemArray.push(item);

        if (this.itemArray.length == 3) {
          this.itemArrayList.push(this.itemArray);
          this.itemArray = [];
        }
      });
      console.log('Item Array :', this.itemArray);
      this.itemArrayList.push(this.itemArray);
      console.log('item Array List :', this.itemArrayList);
    });
  }
}
