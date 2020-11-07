import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { SalesReportComponent } from './sales-report/sales-report.component';
import {ReportComponent} from './report.component';


@NgModule({
  declarations: [ReportComponent, SalesReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
