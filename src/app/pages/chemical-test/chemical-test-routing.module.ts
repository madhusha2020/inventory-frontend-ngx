import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {ChemicalTestComponent} from './chemical-test.component';
import {ChemicalTestMainComponent} from './chemical-test-main/chemical-test-main.component';
import {ChemicalTestCreateComponent} from './chemical-test-create/chemical-test-create.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-TEST']},
    component: ChemicalTestComponent,
    children: [
      {
        path: 'main',
        data: {roles: ['INV-TEST-VW']},
        canActivate: [AuthGuardService],
        component: ChemicalTestMainComponent,
      },
      {
        path: 'create',
        data: {roles: ['INV-TEST-CR']},
        canActivate: [AuthGuardService],
        component: ChemicalTestCreateComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChemicalTestRoutingModule { }
