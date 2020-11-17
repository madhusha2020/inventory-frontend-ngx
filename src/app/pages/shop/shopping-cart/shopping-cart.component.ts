import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from '../../../service/shopping-cart/shopping-cart.service';
import {Item, ItemControllerService} from '../../../service/rest';

@Component({
  selector: 'ngx-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  subTotal: number;
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
      this.calculateSubTotal();
    });
  }

  onQtyChange(event) {
    console.log('Shopping Cart onQtyChange ', event);

    let updatedOrderItems: Array<Item> = [];
    this.orderedItems.forEach(item => {
      if (item.id == event) {
        item.orderedQty = this.shoppingCartService.getItemMap().get(item.id);
        updatedOrderItems.push(item);
      } else {
        updatedOrderItems.push(item);
      }
    });
    this.orderedItems = updatedOrderItems;
    this.calculateSubTotal();
  }

  onRemoveFromCart(event) {
    console.log(event);
    this.shoppingCartService.deleteFromItemMap(event.id);

    let updatedOrderItems: Array<Item> = [];
    this.orderedItems.forEach(item => {
      if (item.id != event.id) {
        updatedOrderItems.push(item);
      }
    });
    this.orderedItems = updatedOrderItems;
    this.calculateSubTotal();
  }

  payNow() {
    console.log(this.orderedItems);
  }

  private calculateSubTotal() {
    console.log('Calculating sub total start ', this.subTotal);
    this.subTotal = 0;
    this.orderedItems.forEach(item => {
      this.subTotal = this.subTotal + item.lastprice * item.orderedQty;
    });
    console.log('Calculating sub total end', this.subTotal);
  }
}
