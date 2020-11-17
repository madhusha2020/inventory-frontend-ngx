import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from '../../../service/shopping-cart/shopping-cart.service';
import {Item, ItemControllerService} from '../../../service/rest';

@Component({
  selector: 'ngx-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  itemList: Array<Item> = [];
  orderedItems: Array<Item> = [];

  constructor(private itemControllerService: ItemControllerService,
              private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit(): void {
    this.itemControllerService.getAllItemsUsingGET(0, 100).subscribe(response => {
      this.itemList = response.itemList;
      this.shoppingCartService.getItemMap().forEach((qty, itemId) => {
        this.itemList.forEach(item => {
          if (item.id == itemId) {
            item.orderedQty = qty;
            this.orderedItems.push(item);
          }
        });
      });
    });
  }

  onRefreshCart(event) {
    console.log(event);
    this.shoppingCartService.deleteFromItemMap(event.id);

    let updatedOrderItems: Array<Item> = [];
    this.orderedItems.forEach(item => {
      if (item.id != event.id) {
        updatedOrderItems.push(item);
      }
    });
    this.orderedItems = updatedOrderItems;
  }

  pay() {

  }
}
