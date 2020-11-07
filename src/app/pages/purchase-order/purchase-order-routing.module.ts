import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {PurchaseOrderComponent} from './purchase-order.component';
import {PurchaseOrderMainComponent} from './purchase-order-main/purchase-order-main.component';
import {PurchaseOrderCreateComponent} from './purchase-order-create/purchase-order-create.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-PO']},
    component: PurchaseOrderComponent,
    children: [
      {
        path: 'main',
        data: {roles: ['INV-PO-VW']},
        canActivate: [AuthGuardService],
        component: PurchaseOrderMainComponent,
      },
      {
        path: 'create',
        data: {roles: ['INV-PO-CR']},
        canActivate: [AuthGuardService],
        component: PurchaseOrderCreateComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseOrderRoutingModule {
}
