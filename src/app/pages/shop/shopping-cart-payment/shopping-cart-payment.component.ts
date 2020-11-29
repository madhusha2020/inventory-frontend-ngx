import {Component, OnInit} from '@angular/core';
import {OrderControllerService, OrderItemsList} from '../../../service/rest';
import {ShoppingCartService} from '../../../service/shopping-cart/shopping-cart.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-shopping-cart-payment',
  templateUrl: './shopping-cart-payment.component.html',
  styleUrls: ['./shopping-cart-payment.component.scss']
})
export class ShoppingCartPaymentComponent implements OnInit {

  orderItemsList: OrderItemsList = {};
  orderPaymentForm: FormGroup;
  amount = 0;

  constructor(private formBuilder: FormBuilder,
              private orderControllerService: OrderControllerService,
              private shoppingCartService: ShoppingCartService,
              private router: Router) {
  }

  get cardNo() {
    return this.orderPaymentForm.get('cardNo');
  }

  get expiry() {
    return this.orderPaymentForm.get('expiry');
  }

  get cardHolderName() {
    return this.orderPaymentForm.get('cardHolderName');
  }

  get cvv() {
    return this.orderPaymentForm.get('cvv');
  }

  ngOnInit(): void {
    this.orderItemsList = window.history.state.order;
    console.log('Window History Data :', window.history.state);
    this.amount = this.shoppingCartService.getAmount();
    console.log('Order Data :', this.orderItemsList);
    console.log('Order Amount :', this.shoppingCartService.getAmount());

    this.orderPaymentForm = this.formBuilder.group({
      cardNo: [null, [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{16}$')]],
      expiry: [null, [Validators.required]],
      cardHolderName: [null, [Validators.required]],
      cvv: [null, [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{3}$')]],
    });
  }

  payment() {
    if (this.orderItemsList) {
      this.orderControllerService.placeOrderUsingPOST(this.orderItemsList).subscribe(response => {
        console.log('Place order response ', response);
        this.shoppingCartService.clearCart();
        Swal.fire('Success', 'Order place successfully', 'success').then(value => {
          this.router.navigate(['/pages/order/main']);
        });
      });
    } else {
      Swal.fire('Warning', 'Something went wrong! </br> Please re-do the last action', 'warning').then(value => {
        this.router.navigate(['/pages/cart']);
      });
    }
  }
}
