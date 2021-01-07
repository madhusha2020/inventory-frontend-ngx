import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TokenService} from '../../../service/auth/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {ServiceUtil} from '../../../service/util/service-util';
import {InventoryItem, Item, ItemControllerService} from '../../../service/rest';

@Component({
  selector: 'ngx-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {

  itemId: number;
  editMode: boolean;
  disabledProperty = 'disabled';
  title: string;

  itemForm: FormGroup;
  item: Item = {};
  inventoryItem: InventoryItem = {};
  dangerLevels = ServiceUtil.getDangerLevels();
  units = ServiceUtil.getUnitTypes();

  constructor(private formBuilder: FormBuilder,
              private itemControllerService: ItemControllerService,
              private tokenService: TokenService,
              private route: ActivatedRoute,
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
    this.editMode = false;
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.itemId = params.id;
          this.fetchItem(params.id);
        } else {
          Swal.fire('Error', 'Item not found', 'error');
        }
      }
    );

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

  enableEditMode() {
    this.editMode = true;
    this.disabledProperty = null;
    this.title = 'Edit';
  }

  disabledEditMode() {
    this.editMode = false;
    this.disabledProperty = 'disabled';
    this.title = null;
    this.setData();
  }

  fetchItem(id: string) {
    this.itemControllerService.getItemByIdUsingGET(id).subscribe(response => {
      console.log('Item response :', response);
      this.item = response;
      this.setData();
    });
  }

  setData() {
    this.code.setValue(this.item.code);
    this.name.setValue(this.item.name);
    this.description.setValue(this.item.description);
    this.sprice.setValue(this.item.sprice);
    this.lastprice.setValue(this.item.lastprice);
    this.dangerlevel.setValue(this.item.dangerlevel);
    this.testperiod.setValue(this.item.testperiod);
    this.rop.setValue(this.item.rop);
    this.unit.setValue(this.item.unit);
    this.weightvolume.setValue(this.item.weightvolume);
  }

  imageUploadEvent(event) {
    console.log('Item photo :', event);
    this.item.photo = event;
  }

  dangerLevelStateChange(event) {
    console.log('Item danger level :', event);
    this.dangerlevel.setValue(event);
  }

  unitStateChange(event) {
    console.log('Item unit :', event);
    this.unit.setValue(event);
  }

  updateItemDetails() {
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

    this.item.inventory.userId = this.tokenService.getUserName();

    this.inventoryItem.item = this.item;
    this.inventoryItem.inventory = this.item.inventory;

    console.log('InventoryItem : ', this.inventoryItem);

    this.itemControllerService.updateInventoryItemUsingPUT(this.inventoryItem).subscribe(response => {
      console.log('Updated InventoryItem :', response);
      Swal.fire('Success', 'Item successfully updated', 'success').then(value => {
        this.router.navigate(['/pages/item/main']);
      });
    });
  }

  suspend() {
    console.log('Suspend item');
      Swal.fire({
        title: 'Are you sure?',
        text: 'Suspend item : {0}'.replace('{0}', this.item.name),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.itemControllerService.suspendItemUsingPUT({
            id: this.item.id,
            userId: this.tokenService.getUserName()
          }).subscribe(response => {
            console.log('Suspend item :', response);
            Swal.fire('Success', 'Item suspend successfully', 'success').then(ok => {
              this.router.navigate(['/pages/item/main']);
            });
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Canceled
        }
      });
  }

  activate() {
    console.log('Activate item');
      Swal.fire({
        title: 'Are you sure?',
        text: 'Activate item : {0}'.replace('{0}', this.item.name),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.itemControllerService.activateItemUsingPUT({
            id: this.item.id,
            userId: this.tokenService.getUserName()
          }).subscribe(response => {
            console.log('Activate item :', response);
            Swal.fire('Success', 'Item activate successfully', 'success').then(ok => {
              this.router.navigate(['/pages/item/main']);
            });
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Canceled
        }
      });
  }
}
