import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TokenService} from '../../../service/auth/token.service';
import {Router} from '@angular/router';
import {
  PurchaseOrder,
  PurchaseOrderControllerService,
  PurchaseOrderItems,
  PurchaseOrderItemsList,
  Supplier,
  SupplierPayment
} from '../../../service/rest';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-purchase-order-create',
  templateUrl: './purchase-order-create.component.html',
  styleUrls: ['./purchase-order-create.component.scss']
})
export class PurchaseOrderCreateComponent implements OnInit {

  poForm: FormGroup;
  supplier: Supplier = {};
  supplierPayment: SupplierPayment = {};
  purchaseOrder: PurchaseOrder = {};
  purchaseOrderItemsList: PurchaseOrderItemsList = {};
  purchaseOrderItems: Array<PurchaseOrderItems> = [];

  constructor(private formBuilder: FormBuilder,
              private purchaseOrderControllerService: PurchaseOrderControllerService,
              private tokenService: TokenService,
              private router: Router) {
  }

  get code() {
    return this.poForm.get('code');
  }

  get description() {
    return this.poForm.get('description');
  }

  get supplierId() {
    return this.poForm.get('supplierId');
  }

  get dorequired() {
    return this.poForm.get('dorequired');
  }

  get chequeno() {
    return this.poForm.get('chequeno');
  }

  get chequebank() {
    return this.poForm.get('chequebank');
  }

  get chequebranch() {
    return this.poForm.get('chequebranch');
  }

  get chequedate() {
    return this.poForm.get('chequedate');
  }


  ngOnInit(): void {
    this.poForm = this.formBuilder.group({
      code: [null, [Validators.required]],
      description: [null, [Validators.required]],
      supplierId: [null, [Validators.required]],
      dorequired: [null, [Validators.required]],
      chequeno: [null, [Validators.required]],
      chequebank: [null, [Validators.required]],
      chequebranch: [null, [Validators.required]],
      chequedate: [null, [Validators.required]],
    });
  }

  supplierStateChange(event) {
    console.log('Supplier Id :', event);
    this.purchaseOrder.supplierId = event;
  }

  poItemListStateChange(event) {
    console.log('Purchase Order Data :', this.poForm.value);
    console.log('Purchase Order Items List :', event);

    this.purchaseOrderItems = [];
    this.purchaseOrderItemsList.purchaseOrderItems = [];

    this.purchaseOrder.code = this.code.value;
    this.purchaseOrder.description = this.description.value;
    this.purchaseOrder.dorequired = this.dorequired.value;
    this.purchaseOrder.userId = this.tokenService.getUserName();

    event.forEach(item => {
      this.purchaseOrderItems.push({item: {id: item.itemId}, qty: item.qty});
    });

    this.supplierPayment.chequeno = this.chequeno.value;
    this.supplierPayment.chequebank = this.chequebank.value;
    this.supplierPayment.chequebranch = this.chequebranch.value;
    this.supplierPayment.chequedate = this.chequedate.value;

    this.purchaseOrderItemsList.userId = this.tokenService.getUserName();
    this.purchaseOrderItemsList.purchaseOrder = this.purchaseOrder;
    this.purchaseOrderItemsList.purchaseOrderItems = this.purchaseOrderItems;
    this.purchaseOrderItemsList.supplierPayment = this.supplierPayment;

    console.log('Purchase Order Item List request :', this.purchaseOrderItemsList);

    if (this.purchaseOrder.supplierId == 0) {
      Swal.fire('Error', 'Supplier not found', 'error');
    }
    Swal.fire({
      title: 'Are you sure?',
      text: 'Create Purchase Order',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        console.log('Purchase Order Request :', this.purchaseOrderItemsList);
        this.purchaseOrderControllerService.placePurchaseOrderUsingPOST(this.purchaseOrderItemsList).subscribe(response => {
          console.log('Purchase Order List response :', response);
          Swal.fire('Success', 'Purchase Order successfully created', 'success').then(value => {
            this.router.navigate(['/pages/purchase-order/main-all']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }
}
