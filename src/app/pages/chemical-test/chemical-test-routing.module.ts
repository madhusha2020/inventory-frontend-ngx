import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {ChemicalTestComponent} from './chemical-test.component';
import {ChemicalTestMainComponent} from './chemical-test-main/chemical-test-main.component';
import {ChemicalTestCreateComponent} from './chemical-test-create/chemical-test-create.component';
import {ChemicalTestViewComponent} from './chemical-test-view/chemical-test-view.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-TEST,INV-TEST-CUS']},
    component: ChemicalTestComponent,
    children: [
      {
        path: 'main',
        data: {roles: ['INV-TEST-VW']},
        canActivate: [AuthGuardService],
        component: ChemicalTestMainComponent,
      },
      {
        path: 'public',
        data: {roles: ['INV-TEST-CUS']},
        canActivate: [AuthGuardService],
        component: ChemicalTestCreateComponent,
      },
      {
        path: 'view',
        data: {roles: ['INV-TEST-VW']},
        canActivate: [AuthGuardService],
        component: ChemicalTestViewComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChemicalTestRoutingModule { }
