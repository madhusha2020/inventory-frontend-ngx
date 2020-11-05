import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {UserMainComponent} from './user-main/user-main.component';
import {UserComponent} from './user.component';
import {UserRoleComponent} from './user-role/user-role.component';
import {UserRoleMainComponent} from './user-role-main/user-role-main.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'main',
        data: {roles: ['INV']},
        canActivate: [AuthGuardService],
        component: UserMainComponent,
      },
      {
        path: 'role-main',
        data: {roles: ['INV']},
        canActivate: [AuthGuardService],
        component: UserRoleMainComponent,
      },
      {
        path: 'role',
        data: {roles: ['INV']},
        canActivate: [AuthGuardService],
        component: UserRoleComponent,
      }
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
