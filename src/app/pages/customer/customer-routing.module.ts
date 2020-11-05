import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerMainComponent} from './customer-main/customer-main.component';
import {CustomerComponent} from './customer.component';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {CustomerCreateComponent} from './customer-create/customer-create.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      {
        path: 'main',
        data: {roles: ['INV']},
        canActivate: [AuthGuardService],
        component: CustomerMainComponent,
      },
      {
        path: 'create',
        data: {roles: ['INV']},
        canActivate: [AuthGuardService],
        component: CustomerCreateComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {
}
