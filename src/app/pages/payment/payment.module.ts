import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PaymentRoutingModule} from './payment-routing.module';
import {PaymentComponent} from './payment.component';
import {PaymentSupplierMainComponent} from './payment-supplier-main/payment-supplier-main.component';
import {PaymentCustomerMainComponent} from './payment-customer-main/payment-customer-main.component';
import {PaymentCustomerViewComponent} from './payment-customer-view/payment-customer-view.component';
import {PaymentSupplierViewComponent} from './payment-supplier-view/payment-supplier-view.component';
import {NbButtonModule, NbCardModule, NbSearchModule, NbTooltipModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';


@NgModule({
  declarations: [
    PaymentComponent,
    PaymentCustomerMainComponent,
    PaymentSupplierMainComponent,
    PaymentCustomerViewComponent,
    PaymentSupplierViewComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    NbCardModule,
    NbSearchModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbTooltipModule
  ]
})
export class PaymentModule {
}
