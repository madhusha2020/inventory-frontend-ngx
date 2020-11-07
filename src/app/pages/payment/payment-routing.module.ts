import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {PaymentComponent} from './payment.component';
import {PaymentSupplierMainComponent} from './payment-supplier-main/payment-supplier-main.component';
import {PaymentCustomerMainComponent} from './payment-customer-main/payment-customer-main.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-PAY']},
    component: PaymentComponent,
    children: [
      {
        path: 'customer-main',
        data: {roles: ['INV-PAY-CUS-VW']},
        canActivate: [AuthGuardService],
        component: PaymentCustomerMainComponent,
      },
      {
        path: 'supplier-main',
        data: {roles: ['INV-PAY-SUP-VW']},
        canActivate: [AuthGuardService],
        component: PaymentSupplierMainComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
