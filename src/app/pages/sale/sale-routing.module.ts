import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {SaleComponent} from './sale.component';
import {SaleMainComponent} from './sale-main/sale-main.component';
import {SaleViewComponent} from './sale-view/sale-view.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-SLE']},
    component: SaleComponent,
    children: [
      {
        path: 'main',
        data: {roles: ['INV-SLE-VW']},
        canActivate: [AuthGuardService],
        component: SaleMainComponent,
      },
      {
        path: 'view',
        data: {roles: ['INV-SLE-VW']},
        canActivate: [AuthGuardService],
        component: SaleViewComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule {
}
