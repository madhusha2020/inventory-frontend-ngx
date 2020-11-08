import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {ComplainComponent} from './complain.component';
import {ComplainMainComponent} from './complain-main/complain-main.component';
import {ComplainCreateComponent} from './complain-create/complain-create.component';
import {ComplainViewComponent} from './complain-view/complain-view.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-COM']},
    component: ComplainComponent,
    children: [
      {
        path: 'main',
        data: {roles: ['INV-COM-VW']},
        canActivate: [AuthGuardService],
        component: ComplainMainComponent,
      },
      {
        path: 'create',
        data: {roles: ['INV-COM-CR']},
        canActivate: [AuthGuardService],
        component: ComplainCreateComponent,
      },
      {
        path: 'view',
        data: {roles: ['INV-COM-VW']},
        canActivate: [AuthGuardService],
        component: ComplainViewComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplainRoutingModule { }
