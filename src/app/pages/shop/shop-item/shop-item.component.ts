import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../service/rest';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShoppingCartService} from '../../../service/shopping-cart/shopping-cart.service';
import {TokenService} from '../../../service/auth/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {

  @Input() item: Item;

  showUploadButton = false;
  itemPurchaseForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private shoppingCartService: ShoppingCartService,
              private tokenService: TokenService,
              private router: Router) {
  }

  get qty() {
    return this.itemPurchaseForm.get('qty');
  }

  ngOnInit(): void {
    this.itemPurchaseForm = this.formBuilder.group({
      qty: [1, [Validators.required]],
    });
  }

  buyNow(item: Item) {
    console.log(item);
    if (this.tokenService.isLoggedIn()) {
      this.shoppingCartService.savedToItemMap(item.id, this.qty.value);
      this.router.navigate(['/pages/cart']);
    } else {
      this.router.navigate(['/auth/login']);
    }
  }

  addToCart(item: Item) {
    console.log(item);
    this.shoppingCartService.savedToItemMap(item.id, this.qty.value);
  }
}
