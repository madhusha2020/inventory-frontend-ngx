import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Item, ItemControllerService} from '../../../service/rest';
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
  item: Item = {};
  itemPhoto: Array<string>;
  dangerLevels = ServiceUtil.getDangerLevels();

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

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      code: [null, [Validators.required]],
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      sprice: [null, [Validators.required]],
      lastprice: [null, [Validators.required]],
      dangerlevel: [ServiceUtil.getLowDangerLevel(), [Validators.required]],
      testperiod: [null],
    });
  }

  dangerLevelStateChange(event) {
    console.log('Item danger level :', event);
    this.dangerlevel.setValue(event);
  }

  imageUploadEvent(event) {
    console.log('Item photo :', event);
    this.itemPhoto = event;
  }

  submit() {
    this.item = this.itemForm.value;
    this.item.photo = this.itemPhoto;
    console.log('Item : ', this.item);

    this.itemControllerService.saveItemUsingPOST(this.item).subscribe(response => {
      console.log('Saved Item :', response);
      Swal.fire('Success', 'Item successfully created', 'success').then(value => {
        this.router.navigate(['/pages/item/main']);
      });
    });
  }
}
