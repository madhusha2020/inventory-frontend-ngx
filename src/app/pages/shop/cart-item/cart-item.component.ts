import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../../service/rest';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShoppingCartService} from '../../../service/shopping-cart/shopping-cart.service';

@Component({
  selector: 'ngx-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() item: Item;
  @Output() refreshCart = new EventEmitter<any>();

  showUploadButton = false;
  itemUpdateForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private shoppingCartService: ShoppingCartService) {
  }

  get qty() {
    return this.itemUpdateForm.get('qty');
  }

  ngOnInit(): void {
    this.itemUpdateForm = this.formBuilder.group({
      qty: [this.item.orderedQty, [Validators.required]],
    });
  }

  qtyOnChange(event) {
    this.shoppingCartService.savedToItemMap(this.item.id, this.qty.value);
  }

  removeFromCart() {
    this.refreshCart.emit(this.item);
  }
}
