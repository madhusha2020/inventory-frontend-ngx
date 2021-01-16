import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SupplierPayment, SupplierPaymentControllerService} from '../../../service/rest';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-payment-supplier-view',
  templateUrl: './payment-supplier-view.component.html',
  styleUrls: ['./payment-supplier-view.component.scss']
})
export class PaymentSupplierViewComponent implements OnInit {


  supplierPaymentForm: FormGroup;
  supplierPayment: SupplierPayment = {};

  constructor(private formBuilder: FormBuilder,
              private supplierPaymentControllerService: SupplierPaymentControllerService,
              private route: ActivatedRoute) {
  }

  get id() {
    return this.supplierPaymentForm.get('id');
  }

  get purchaseOrderId() {
    return this.supplierPaymentForm.get('purchaseOrderId');
  }

  get date() {
    return this.supplierPaymentForm.get('date');
  }

  get amount() {
    return this.supplierPaymentForm.get('amount');
  }

  get ref() {
    return this.supplierPaymentForm.get('ref');
  }

  get chequeno() {
    return this.supplierPaymentForm.get('chequeno');
  }

  get chequebank() {
    return this.supplierPaymentForm.get('chequebank');
  }

  get chequebranch() {
    return this.supplierPaymentForm.get('chequebranch');
  }

  get chequedate() {
    return this.supplierPaymentForm.get('chequedate');
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.fetchSupplierPayment(params.id);
        } else {
          Swal.fire('Error', 'Payment not found', 'error');
        }
      }
    );

    this.supplierPaymentForm = this.formBuilder.group({
      id: [null, [Validators.required]],
      purchaseOrderId: [null, [Validators.required]],
      date: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      ref: [null, [Validators.required]],
      chequeno: [null, [Validators.required]],
      chequebank: [null, [Validators.required]],
      chequebranch: [null, [Validators.required]],
      chequedate: [null, [Validators.required]],
    });
  }

  fetchSupplierPayment(id: string) {
    this.supplierPaymentControllerService.getSupplierPaymentByIdUsingGET(id).subscribe(response => {
      console.log('Supplier Payment Data :', response);
      this.supplierPayment = response;
      this.setData();
    });
  }

  setData() {
    this.id.setValue(this.supplierPayment.id);
    this.purchaseOrderId.setValue(this.supplierPayment.purchaseOrderId);
    this.date.setValue(new Date(this.supplierPayment.date));
    this.amount.setValue(this.supplierPayment.amount);
    this.ref.setValue(this.supplierPayment.ref);
    this.chequeno.setValue(this.supplierPayment.chequeno);
    this.chequebank.setValue(this.supplierPayment.chequebank);
    this.chequebranch.setValue(this.supplierPayment.chequebranch);
    this.chequedate.setValue(new Date(this.supplierPayment.chequedate));
  }
}
