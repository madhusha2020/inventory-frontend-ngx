import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {DeliveryUpdateComponent} from './delivery-update/delivery-update.component';
import {DeliveryComponent} from './delivery.component';
import {DeliveryMainComponent} from './delivery-main/delivery-main.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-DEL']},
    component: DeliveryComponent,
    children: [
      {
        path: 'main',
        data: {roles: ['INV-DEL']},
        canActivate: [AuthGuardService],
        component: DeliveryMainComponent,
      },
      {
        path: 'view',
        data: {roles: ['INV-DEL-VW']},
        canActivate: [AuthGuardService],
        component: DeliveryUpdateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule {
}
