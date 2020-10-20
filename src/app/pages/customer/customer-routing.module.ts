import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerMainComponent} from './customer-main/customer-main.component';
import {CustomerComponent} from './customer.component';
import {AuthGuardService} from '../../service/auth/auth-guard.service';

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
      }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {
}
