import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {PaymentComponent} from './payment.component';
import {PaymentSupplierMainComponent} from './payment-supplier-main/payment-supplier-main.component';
import {PaymentCustomerMainComponent} from './payment-customer-main/payment-customer-main.component';
import {PaymentCustomerViewComponent} from './payment-customer-view/payment-customer-view.component';
import {PaymentSupplierViewComponent} from './payment-supplier-view/payment-supplier-view.component';

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
        path: 'customer-view',
        data: {roles: ['INV-PAY-CUS-VW']},
        canActivate: [AuthGuardService],
        component: PaymentCustomerViewComponent,
      },
      {
        path: 'supplier-main',
        data: {roles: ['INV-PAY-SUP-VW']},
        canActivate: [AuthGuardService],
        component: PaymentSupplierMainComponent,
      },
      {
        path: 'supplier-view',
        data: {roles: ['INV-PAY-SUP-VW']},
        canActivate: [AuthGuardService],
        component: PaymentSupplierViewComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
