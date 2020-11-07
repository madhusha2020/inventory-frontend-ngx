import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {NotificationMainComponent} from './notification-main/notification-main.component';
import {NotificationComponent} from './notification.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-NTFY']},
    component: NotificationComponent,
    children: [
      {
        path: 'main',
        data: {roles: ['INV-NTFY-VW']},
        canActivate: [AuthGuardService],
        component: NotificationMainComponent,
      }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
