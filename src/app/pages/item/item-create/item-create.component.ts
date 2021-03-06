import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Inventory, InventoryItem, Item, ItemControllerService} from '../../../service/rest';
import {ServiceUtil} from '../../../service/util/service-util';
import {TokenService} from '../../../service/auth/token.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent implements OnInit {

  itemForm: FormGroup;

  inventoryItem: InventoryItem = {};
  item: Item = {};
  inventory: Inventory = {};

  dangerLevels = ServiceUtil.getDangerLevels();
  units = ServiceUtil.getUnitTypes();

  constructor(private formBuilder: FormBuilder,
              private itemControllerService: ItemControllerService,
              private tokenService: TokenService,
              private router: Router) {
  }

  get code() {
    return this.itemForm.get('code');
  }

  get name() {
    return this.itemForm.get('name');
  }

  get description() {
    return this.itemForm.get('description');
  }

  get sprice() {
    return this.itemForm.get('sprice');
  }

  get lastprice() {
    return this.itemForm.get('lastprice');
  }

  get dangerlevel() {
    return this.itemForm.get('dangerlevel');
  }

  get testperiod() {
    return this.itemForm.get('testperiod');
  }

  get initqty() {
    return this.itemForm.get('initqty');
  }

  get qty() {
    return this.itemForm.get('qty');
  }

  get rop() {
    return this.itemForm.get('rop');
  }

  get unit() {
    return this.itemForm.get('unit');
  }

  get weightvolume() {
    return this.itemForm.get('weightvolume');
  }

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      code: [null, [Validators.required]],
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      sprice: [null, [Validators.required]],
      lastprice: [null, [Validators.required]],
      dangerlevel: [ServiceUtil.getLowDangerLevel(), [Validators.required]],
      testperiod: [null, Validators.pattern('^[0-9]*$')],
      initqty: [0, [Validators.required, Validators.pattern('^[0-9]*$')]],
      qty: [0, [Validators.required, Validators.pattern('^[0-9]*$')]],
      rop: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      unit: [ServiceUtil.getKgUnitType(), [Validators.required]],
      weightvolume: [null, [Validators.required]],
    });
  }

  dangerLevelStateChange(event) {
    console.log('Item danger level :', event);
    this.dangerlevel.setValue(event);
  }

  unitStateChange(event) {
    console.log('Item unit :', event);
    this.unit.setValue(event);
  }

  imageUploadEvent(event) {
    console.log('Item photo :', event);
    this.item.photo = event;
  }

  submit() {
    this.item.code = this.code.value;
    this.item.name = this.name.value;
    this.item.description = this.description.value;
    this.item.sprice = this.sprice.value;
    this.item.lastprice = this.lastprice.value;
    this.item.dangerlevel = this.dangerlevel.value;
    this.item.testperiod = this.testperiod.value;
    this.item.rop = this.rop.value;
    this.item.unit = this.unit.value;
    this.item.weightvolume = this.weightvolume.value;
    this.item.userId = this.tokenService.getUserName();

    this.inventory.code = this.code.value;
    this.inventory.description = this.description.value;
    this.inventory.initqty = this.initqty.value;
    this.inventory.qty = this.qty.value;
    this.inventory.userId = this.tokenService.getUserName();

    this.inventoryItem.item = this.item;
    this.inventoryItem.inventory = this.inventory;

    console.log('InventoryItem : ', this.inventoryItem);

    this.itemControllerService.saveInventoryItemUsingPOST(this.inventoryItem).subscribe(response => {
      console.log('Saved InventoryItem :', response);
      Swal.fire('Success', 'Item successfully created', 'success').then(value => {
        this.router.navigate(['/pages/item/main']);
      });
    });
  }
}
