import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Purchase, PurchaseControllerService} from '../../../service/rest';
import {TokenService} from '../../../service/auth/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-grn-view',
  templateUrl: './grn-view.component.html',
  styleUrls: ['./grn-view.component.scss']
})
export class GrnViewComponent implements OnInit {

  editMode: boolean;
  disabledProperty = 'disabled';
  title: string;

  purchaseForm: FormGroup;
  purchaseId: number;
  purchase: Purchase = {};

  constructor(private formBuilder: FormBuilder,
              private purchaseControllerService: PurchaseControllerService,
              private tokenService: TokenService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  get code() {
    return this.purchaseForm.get('code');
  }

  get description() {
    return this.purchaseForm.get('description');
  }

  get total() {
    return this.purchaseForm.get('total');
  }

  get doordered() {
    return this.purchaseForm.get('doordered');
  }

  get dorequired() {
    return this.purchaseForm.get('dorequired');
  }

  ngOnInit(): void {
    this.editMode = false;
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.purchaseId = params.id;
          this.fetchPurchase(params.id);
        } else {
          Swal.fire('Error', 'Purchase not found', 'error');
        }
      }
    );

    this.purchaseForm = this.formBuilder.group({
      code: [null, [Validators.required]],
      description: [null, [Validators.required]],
      total: [null, [Validators.required]],
      doordered: [null, [Validators.required]],
      dorequired: [null, [Validators.required]],
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
  }

  fetchPurchase(id: string) {
    this.purchaseControllerService.getPurchaseByIdUsingGET(id).subscribe(response => {
      console.log('Purchase Data :', response);
      this.purchase = response;
      this.setData();
    });
  }

  setData() {
    this.code.setValue(this.purchase.code);
    this.description.setValue(this.purchase.description);
    this.total.setValue(this.purchase.total.toLocaleString('en-US', {style: 'currency', currency: 'LKR'}));
    this.doordered.setValue(this.purchase.purchaseOrder.doordered);
    this.dorequired.setValue(this.purchase.purchaseOrder.dorequired);
  }

  purchaseItemListStateChange(event) {
    console.log('Purchase Item List :', event);
    event.forEach(purchaseItem => {
      this.purchase.purchaseItems.forEach(savedPurchaseItem => {
        if (savedPurchaseItem.purchaseItemId.itemId == purchaseItem.itemId) {
          savedPurchaseItem.acceptedqty = purchaseItem.acceptedQty;
          savedPurchaseItem.rejectedqty = purchaseItem.rejectedQty;
          savedPurchaseItem.doexpire = purchaseItem.expireDate;
          savedPurchaseItem.userId = this.tokenService.getUserName();
        }
      });
    });
    this.purchase.userId = this.tokenService.getUserName();
    console.log('Updated purchase :', this.purchase);

    Swal.fire({
      title: 'Are you sure?',
      text: 'Update purchase',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.purchaseControllerService.savePurchaseUsingPUT({purchase: this.purchase}).subscribe(response => {
          console.log('Update purchase response :', response);
          Swal.fire('Success', 'Purchase successfully updated', 'success').then(value => {
            this.router.navigate(['/pages/grn/main']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }
}

