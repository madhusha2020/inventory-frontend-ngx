import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {ItemComponent} from './item.component';
import {ItemMainComponent} from './item-main/item-main.component';
import {ItemCreateComponent} from './item-create/item-create.component';
import {ItemDisposeComponent} from './item-dispose/item-dispose.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-ITM']},
    component: ItemComponent,
    children: [
      {
        path: 'main',
        data: {roles: ['INV-ITM-VW']},
        canActivate: [AuthGuardService],
        component: ItemMainComponent,
      },
      {
        path: 'create',
        data: {roles: ['INV-ITM-CR']},
        canActivate: [AuthGuardService],
        component: ItemCreateComponent,
      },
      {
        path: 'dispose',
        data: {roles: ['INV-ITM-DIS']},
        canActivate: [AuthGuardService],
        component: ItemDisposeComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
