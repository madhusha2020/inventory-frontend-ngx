import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {EmployeeComponent} from './employee.component';
import {EmployeeMainComponent} from './employee-main/employee-main.component';
import {EmployeeCreateComponent} from './employee-create/employee-create.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-EMP']},
    component: EmployeeComponent,
    children: [
      {
        path: 'main',
        data: {roles: ['INV-EMP-VW']},
        canActivate: [AuthGuardService],
        component: EmployeeMainComponent,
      },
      {
        path: 'create',
        data: {roles: ['INV-EMP-CR']},
        canActivate: [AuthGuardService],
        component: EmployeeCreateComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
