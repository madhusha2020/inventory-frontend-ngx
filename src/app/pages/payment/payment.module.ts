import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentMainComponent } from './payment-main/payment-main.component';
import {PaymentComponent} from './payment.component';


@NgModule({
  declarations: [PaymentComponent, PaymentMainComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
