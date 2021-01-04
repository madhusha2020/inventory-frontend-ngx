import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  Disposal,
  DisposalControllerService,
  DisposalInventory,
  DisposalInventoryList,
  Inventory
} from '../../../service/rest';
import {TokenService} from '../../../service/auth/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-inventory-disposal-create',
  templateUrl: './inventory-disposal-create.component.html',
  styleUrls: ['./inventory-disposal-create.component.scss']
})
export class InventoryDisposalCreateComponent implements OnInit {

  disposalForm: FormGroup;
  disposal: Disposal = {};
  inventory: Inventory = {};
  disposalInventoryList: DisposalInventoryList = {};
  disposalInventories: Array<DisposalInventory> = [];

  constructor(private formBuilder: FormBuilder,
              private disposalControllerService: DisposalControllerService,
              private tokenService: TokenService,
              private router: Router) {
  }

  get reason() {
    return this.disposalForm.get('reason');
  }

  get description() {
    return this.disposalForm.get('description');
  }

  ngOnInit(): void {
    this.disposalForm = this.formBuilder.group({
      reason: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  disposalItemListStateChange(event) {
    console.log('Disposal Data :', this.disposalForm.value);
    console.log('Disposal Items List :', event);

    this.disposalInventories = [];
    this.disposalInventoryList.disposalInventoryList = [];

    this.disposal = this.disposalForm.value;
    this.disposal.userId = this.tokenService.getUserName();

    event.forEach(item => {
      this.inventory.id = item.itemId;
      this.disposalInventories.push({inventory: this.inventory, qty: item.qty});
    });
    this.disposalInventoryList.disposal = this.disposal;
    this.disposalInventoryList.disposalInventoryList = this.disposalInventories;

    console.log('Disposal Inventory List request :', this.disposalInventoryList);

    this.disposalControllerService.createDisposalProductUsingPOST(this.disposalInventoryList).subscribe(response => {
      console.log('Disposal Inventory List response :', response);
    });
  }
}
