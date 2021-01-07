import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {ItemComponent} from './item.component';
import {ItemMainComponent} from './item-main/item-main.component';
import {ItemCreateComponent} from './item-create/item-create.component';
import {ItemViewComponent} from './item-view/item-view.component';

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
        path: 'view',
        data: {roles: ['INV-ITM-VW']},
        canActivate: [AuthGuardService],
        component: ItemViewComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
