import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {GrnComponent} from './grn.component';
import {GrnMainComponent} from './grn-main/grn-main.component';
import {GrnCreateComponent} from './grn-create/grn-create.component';
import {GrnReturnComponent} from './grn-return/grn-return.component';
import {GrnReturnCreateComponent} from './grn-return-create/grn-return-create.component';
import {GrnRefundComponent} from './grn-refund/grn-refund.component';
import {GrnRefundCreateComponent} from './grn-refund-create/grn-refund-create.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-GRN,INV-GRN-RET,INV-GRN-REF']},
    component: GrnComponent,
    children: [
      {
        path: 'main',
        data: {roles: ['INV-GRN-VW']},
        canActivate: [AuthGuardService],
        component: GrnMainComponent,
      },
      {
        path: 'create',
        data: {roles: ['INV-GRN-CR']},
        canActivate: [AuthGuardService],
        component: GrnCreateComponent,
      },
      {
        path: 'return',
        data: {roles: ['INV-GRN-RET-VW']},
        canActivate: [AuthGuardService],
        component: GrnReturnComponent,
      },
      {
        path: 'create-return',
        data: {roles: ['INV-GRN-RET-CR']},
        canActivate: [AuthGuardService],
        component: GrnReturnCreateComponent,
      },
      {
        path: 'refund',
        data: {roles: ['INV-GRN-REF-VW']},
        canActivate: [AuthGuardService],
        component: GrnRefundComponent,
      },
      {
        path: 'create-refund',
        data: {roles: ['INV-GRN-REF-CR']},
        canActivate: [AuthGuardService],
        component: GrnRefundCreateComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrnRoutingModule {
}
