import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {SupplierComponent} from './suppler.component';
import {SupplierMainComponent} from './supplier-main/supplier-main.component';
import {SupplierCreateComponent} from './supplier-create/supplier-create.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-SUP']},
    component: SupplierComponent,
    children: [
      {
        path: 'main',
        data: {roles: ['INV-SUP-VW']},
        canActivate: [AuthGuardService],
        component: SupplierMainComponent,
      },
      {
        path: 'create',
        data: {roles: ['INV-SUP-CR']},
        canActivate: [AuthGuardService],
        component: SupplierCreateComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
