import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {UserMainComponent} from './user-main/user-main.component';
import {UserComponent} from './user.component';
import {UserRoleComponent} from './user-role/user-role.component';
import {UserRoleMainComponent} from './user-role-main/user-role-main.component';
import {UserViewComponent} from './user-view/user-view.component';
import {UserRoleViewComponent} from './user-role-view/user-role-view.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-USR,INV-ROL']},
    component: UserComponent,
    children: [
      {
        path: 'main',
        data: {roles: ['INV-USR-VW']},
        canActivate: [AuthGuardService],
        component: UserMainComponent,
      },
      {
        path: 'view',
        data: {roles: ['INV-USR-VW']},
        canActivate: [AuthGuardService],
        component: UserViewComponent,
      },
      {
        path: 'role-main',
        data: {roles: ['INV-ROL-VW']},
        canActivate: [AuthGuardService],
        component: UserRoleMainComponent,
      },
      {
        path: 'role',
        data: {roles: ['INV-ROL-CR']},
        canActivate: [AuthGuardService],
        component: UserRoleComponent,
      },
      {
        path: 'role-view',
        data: {roles: ['INV-ROL-VW']},
        canActivate: [AuthGuardService],
        component: UserRoleViewComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
