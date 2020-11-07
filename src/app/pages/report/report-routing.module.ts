import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {SalesReportComponent} from './sales-report/sales-report.component';
import {ReportComponent} from './report.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-RPT']},
    component: ReportComponent,
    children: [
      {
        path: 'sales-report',
        data: {roles: ['INV-RPT-SLE']},
        canActivate: [AuthGuardService],
        component: SalesReportComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule {
}
