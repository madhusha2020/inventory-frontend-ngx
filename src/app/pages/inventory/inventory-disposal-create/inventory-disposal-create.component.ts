import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Disposal, DisposalControllerService, DisposalInventory, DisposalInventoryList} from '../../../service/rest';
import {TokenService} from '../../../service/auth/token.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-inventory-disposal-create',
  templateUrl: './inventory-disposal-create.component.html',
  styleUrls: ['./inventory-disposal-create.component.scss']
})
export class InventoryDisposalCreateComponent implements OnInit {

  disposalForm: FormGroup;
  disposal: Disposal = {};
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
      this.disposalInventories.push({inventory: {id: item.itemId}, qty: item.qty});
    });
    this.disposalInventoryList.disposal = this.disposal;
    this.disposalInventoryList.disposalInventoryList = this.disposalInventories;

    console.log('Disposal Inventory List request :', this.disposalInventoryList);

    Swal.fire({
      title: 'Are you sure?',
      text: 'Create Disposal',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        console.log('Disposal Request :', this.disposalInventoryList);
        this.disposalControllerService.createDisposalProductUsingPOST(this.disposalInventoryList).subscribe(response => {
          console.log('Disposal Inventory List response :', response);
          Swal.fire('Success', 'Disposal successfully created', 'success').then(value => {
            this.router.navigate(['/pages/inventory/disposal-main']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }
}
