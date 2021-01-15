import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CustomerPayment, CustomerPaymentControllerService} from '../../../service/rest';

@Component({
  selector: 'ngx-payment-customer-view',
  templateUrl: './payment-customer-view.component.html',
  styleUrls: ['./payment-customer-view.component.scss']
})
export class PaymentCustomerViewComponent implements OnInit {

  customerPaymentForm: FormGroup;
  customerPayment: CustomerPayment = {};

  constructor(private formBuilder: FormBuilder,
              private customerPaymentControllerService: CustomerPaymentControllerService,
              private route: ActivatedRoute) {
  }

  get id() {
    return this.customerPaymentForm.get('id');
  }

  get saleId() {
    return this.customerPaymentForm.get('saleId');
  }

  get date() {
    return this.customerPaymentForm.get('date');
  }

  get amount() {
    return this.customerPaymentForm.get('amount');
  }

  get ref() {
    return this.customerPaymentForm.get('ref');
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.fetchCustomerPayment(params.id);
        } else {
          Swal.fire('Error', 'Payment not found', 'error');
        }
      }
    );

    this.customerPaymentForm = this.formBuilder.group({
      id: [null, [Validators.required]],
      saleId: [null, [Validators.required]],
      date: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      ref: [null, [Validators.required]],
    });
  }

  fetchCustomerPayment(id: string) {
    this.customerPaymentControllerService.getCustomerPaymentByIdUsingGET(id).subscribe(response => {
      console.log('Customer Payment Data :', response);
      this.customerPayment = response;
      this.setData();
    });
  }

  setData() {
    this.id.setValue(this.customerPayment.id);
    this.saleId.setValue(this.customerPayment.sale.id);
    this.date.setValue(new Date(this.customerPayment.date));
    this.amount.setValue(this.customerPayment.amount);
    this.ref.setValue(this.customerPayment.ref);
  }
}
