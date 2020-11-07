import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {OrderComponent} from './order.component';
import {OrderMainComponent} from './order-main/order-main.component';
import {OrderCreateComponent} from './order-create/order-create.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-ORD']},
    component: OrderComponent,
    children: [
      {
        path: 'main',
        data: {roles: ['INV-ORD-VW']},
        canActivate: [AuthGuardService],
        component: OrderMainComponent,
      },
      {
        path: 'create',
        data: {roles: ['INV-ORD-CR']},
        canActivate: [AuthGuardService],
        component: OrderCreateComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
