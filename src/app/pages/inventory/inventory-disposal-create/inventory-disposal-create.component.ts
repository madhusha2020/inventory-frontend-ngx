import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DisposalControllerService} from '../../../service/rest';
import {TokenService} from '../../../service/auth/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-inventory-disposal-create',
  templateUrl: './inventory-disposal-create.component.html',
  styleUrls: ['./inventory-disposal-create.component.scss']
})
export class InventoryDisposalCreateComponent implements OnInit {

  disposalForm: FormGroup;

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
  }
}
