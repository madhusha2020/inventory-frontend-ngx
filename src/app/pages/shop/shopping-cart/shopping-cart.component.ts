import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from '../../../service/shopping-cart/shopping-cart.service';
import {
  Customer,
  Item,
  ItemControllerService,
  Order,
  OrderControllerService,
  OrderItems,
  OrderItemsList
} from '../../../service/rest';
import {TokenService} from '../../../service/auth/token.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  offset = 0;
  limit = 100;

  subTotal: number;
  itemList: Array<Item> = [];
  orderedItems: Array<Item> = [];

  itemArray: Array<Item> = [];
  itemArrayList: Array<Array<Item>> = new Array<Array<Item>>();

  order: Order = {};
  customer: Customer = {};
  orderItems: Array<OrderItems> = [];
  orderItemsList: OrderItemsList = {};

  constructor(private itemControllerService: ItemControllerService,
              private orderControllerService: OrderControllerService,
              private shoppingCartService: ShoppingCartService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.itemControllerService.getAllItemsUsingGET(this.offset, this.limit).subscribe(response => {
      this.itemList = response.itemList;
      this.shoppingCartService.getItemMap().forEach((qty, itemId) => {
        this.itemList.forEach(item => {
          if (item.id == itemId) {
            item.orderedQty = qty;
            this.orderedItems.push(item);
          }
        });
      });
      this.mapOrderItems();
      this.calculateSubTotal();
    });
  }

  onQtyChange(event) {
    console.log('Shopping Cart onQtyChange (itemId) ', event);
    this.orderItems = [];
    this.orderItemsList = {};

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
    console.log('Ordered Items ', this.orderedItems);
    this.mapOrderItems();
    this.calculateSubTotal();
  }

  onRemoveFromCart(event) {
    console.log('Shopping Cart onRemoveFromCart ', event);
    this.orderItems = [];
    this.orderItemsList = {};

    this.shoppingCartService.deleteFromItemMap(event.id);

    let updatedOrderItems: Array<Item> = [];
    this.orderedItems.forEach(item => {
      if (item.id != event.id) {
        updatedOrderItems.push(item);
      }
    });
    this.orderedItems = updatedOrderItems;
    console.log('Ordered Items ', this.orderedItems);
    this.mapOrderItems();
    this.calculateSubTotal();
  }

  orderNow() {
    console.log('Before Pay Ordered Items ', this.orderedItems);
    this.orderItems = [];
    this.orderItemsList = {};

    if (this.tokenService.isLoggedIn()) {

      this.customer.email = this.tokenService.getUserName();

      this.order.customer = this.customer;
      this.order.userId = this.tokenService.getUserName();

      this.orderedItems.forEach(orderItem => {
        this.orderItems.push({item: orderItem, qty: orderItem.orderedQty});
      });

      this.orderItemsList.order = this.order;
      this.orderItemsList.orderItems = this.orderItems;
      this.orderItemsList.userId = this.tokenService.getUserName();
      this.orderItemsList.paymentType = ServiceUtil.getOnlinePaymentType();
      this.shoppingCartService.setAmount(this.subTotal);
      console.log('Place order request ', this.orderItemsList);

      Swal.fire({
        title: 'Are you sure?',
        text: 'Place order : {0}'.replace('{0}', this.subTotal.toLocaleString('en-US', {
          style: 'currency',
          currency: 'LKR'
        })),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.orderControllerService.preOrderValidateUsingPOST(this.orderItemsList).subscribe(response => {
            this.router.navigate(['/pages/shopping-cart-payment'], {state: {order: this.orderItemsList}});
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Canceled
        }
      });

    } else {
      Swal.fire('Login required', 'Please logged in or register to continue', 'warning').then(value => {
        this.router.navigate(['/auth/login']);
      });
    }
  }

  private mapOrderItems() {
    console.log('Ordered Items ', this.orderedItems);
    this.itemArray = [];
    this.itemArrayList = [];

    this.orderedItems.forEach(orderItem => {
      this.itemArray.push(orderItem);
      if (this.itemArray.length == 4) {
        this.itemArrayList.push(this.itemArray);
        this.itemArray = [];
      }
    });
    this.itemArrayList.push(this.itemArray);
    console.log('mapOrderItems ', this.itemArrayList);
  }

  private calculateSubTotal() {
    this.subTotal = 0;
    this.orderedItems.forEach(item => {
      this.subTotal = this.subTotal + item.lastprice * item.orderedQty;
    });
    console.log('calculateSubTotal ', this.subTotal);
  }
}
