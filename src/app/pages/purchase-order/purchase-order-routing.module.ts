import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {PurchaseOrderComponent} from './purchase-order.component';
import {PurchaseOrderMainComponent} from './purchase-order-main/purchase-order-main.component';
import {PurchaseOrderCreateComponent} from './purchase-order-create/purchase-order-create.component';
import {PurchaseOrderViewComponent} from './purchase-order-view/purchase-order-view.component';
import {PurchaseOrderMailAllComponent} from './purchase-order-mail-all/purchase-order-mail-all.component';
import {PurchaseOrderMailViewComponent} from './purchase-order-mail-view/purchase-order-mail-view.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-PO']},
    component: PurchaseOrderComponent,
    children: [
      {
        path: 'create',
        data: {roles: ['INV-PO-CR']},
        canActivate: [AuthGuardService],
        component: PurchaseOrderCreateComponent,
      },
      {
        path: 'main',
        data: {roles: ['INV-PO-VW']},
        canActivate: [AuthGuardService],
        component: PurchaseOrderMainComponent,
      },
      {
        path: 'view',
        data: {roles: ['INV-PO-VW']},
        canActivate: [AuthGuardService],
        component: PurchaseOrderViewComponent,
      },
      {
        path: 'main-all',
        data: {roles: ['INV-PO-ALL']},
        canActivate: [AuthGuardService],
        component: PurchaseOrderMailAllComponent,
      },
      {
        path: 'main-view',
        data: {roles: ['INV-PO-ALL']},
        canActivate: [AuthGuardService],
        component: PurchaseOrderMailViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseOrderRoutingModule {
}
