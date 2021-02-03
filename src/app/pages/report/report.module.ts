import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReportRoutingModule} from './report-routing.module';
import {SalesReportComponent} from './sales-report/sales-report.component';
import {ReportComponent} from './report.component';
import {NbButtonModule, NbCardModule, NbTabsetModule} from '@nebular/theme';
import {FormInputModule} from '../shared/form-inputs/form-input.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';


@NgModule({
  declarations: [ReportComponent, SalesReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    NbCardModule,
    NbTabsetModule,
    FormInputModule,
    NbButtonModule,
    Ng2SmartTableModule
  ]
})
export class ReportModule {
}
