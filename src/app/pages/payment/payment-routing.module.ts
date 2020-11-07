import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {PaymentMainComponent} from './payment-main/payment-main.component';
import {PaymentComponent} from './payment.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-PAY']},
    component: PaymentComponent,
    children: [
      {
        path: 'main',
        data: {roles: ['INV-PAY-VW']},
        canActivate: [AuthGuardService],
        component: PaymentMainComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
