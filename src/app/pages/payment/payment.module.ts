import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import {PaymentComponent} from './payment.component';
import { PaymentSupplierMainComponent } from './payment-supplier-main/payment-supplier-main.component';
import {PaymentCustomerMainComponent} from './payment-customer-main/payment-customer-main.component';


@NgModule({
  declarations: [PaymentComponent, PaymentCustomerMainComponent, PaymentSupplierMainComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
