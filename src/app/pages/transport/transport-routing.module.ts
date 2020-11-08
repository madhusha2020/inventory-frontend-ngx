import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {TransportComponent} from './transport.component';
import {TransportMainComponent} from './transport-main/transport-main.component';
import {TransportCreateComponent} from './transport-create/transport-create.component';
import {TransportViewComponent} from './transport-view/transport-view.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-TRS']},
    component: TransportComponent,
    children: [
      {
        path: 'main',
        data: {roles: ['INV-TRS-VW']},
        canActivate: [AuthGuardService],
        component: TransportMainComponent,
      },
      {
        path: 'create',
        data: {roles: ['INV-TRS-CR']},
        canActivate: [AuthGuardService],
        component: TransportCreateComponent,
      },
      {
        path: 'view',
        data: {roles: ['INV-TRS-VW']},
        canActivate: [AuthGuardService],
        component: TransportViewComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportRoutingModule { }
