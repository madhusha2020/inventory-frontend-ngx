import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReportRoutingModule} from './report-routing.module';
import {SalesReportComponent} from './sales-report/sales-report.component';
import {ReportComponent} from './report.component';
import {NbButtonModule, NbCardModule, NbTabsetModule} from '@nebular/theme';
import {FormInputModule} from '../shared/form-inputs/form-input.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {OrdersReportComponent} from './orders-report/orders-report.component';
import {PurchaseOrdersReportComponent} from './purchase-orders-report/purchase-orders-report.component';
import {PurchasesReportComponent} from './purchases-report/purchases-report.component';
import {CustomerPaymentsReportComponent} from './customer-payments-report/customer-payments-report.component';
import {SupplierPaymentsReportComponent} from './supplier-payments-report/supplier-payments-report.component';
import {SupplierReturnsReportComponent} from './supplier-returns-report/supplier-returns-report.component';
import {SupplierRefundsReportComponent} from './supplier-refunds-report/supplier-refunds-report.component';
import {DeliveriesReportComponent} from './deliveries-report/deliveries-report.component';
import {DisposalsReportComponent} from './disposals-report/disposals-report.component';


@NgModule({
  declarations: [ReportComponent, SalesReportComponent, OrdersReportComponent, PurchaseOrdersReportComponent, PurchasesReportComponent, CustomerPaymentsReportComponent, SupplierPaymentsReportComponent, SupplierReturnsReportComponent, SupplierRefundsReportComponent, DeliveriesReportComponent, DisposalsReportComponent],
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
