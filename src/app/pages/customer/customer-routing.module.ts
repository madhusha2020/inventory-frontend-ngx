import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerMainComponent} from './customer-main/customer-main.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerComponent} from './customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      {
        path: 'main',
        component: CustomerMainComponent,
      },
      {
        path: 'create',
        component: CustomerCreateComponent,
      }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {
}
