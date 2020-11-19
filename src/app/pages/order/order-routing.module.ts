import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {OrderComponent} from './order.component';
import {OrderMainComponent} from './order-main/order-main.component';
import {OrderCreateComponent} from './order-create/order-create.component';
import {OrderViewComponent} from './order-view/order-view.component';
import {OrderMainAllComponent} from './order-main-all/order-main-all.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-ORD']},
    component: OrderComponent,
    children: [
      {
        path: 'main-all',
        data: {roles: ['INV-ORD-ALL']},
        canActivate: [AuthGuardService],
        component: OrderMainAllComponent,
      },
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
      },
      {
        path: 'view',
        data: {roles: ['INV-ORD-VW']},
        canActivate: [AuthGuardService],
        component: OrderViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {
}
