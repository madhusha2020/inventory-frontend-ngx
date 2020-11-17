import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../service/rest';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {

  @Input() item: Item;

  showUploadButton = false;
  itemPurchaseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
  }

  addToCart(item: Item) {
    console.log(item);
  }
}
