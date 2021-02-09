import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {SalesReportComponent} from './sales-report/sales-report.component';
import {ReportComponent} from './report.component';
import {OrdersReportComponent} from './orders-report/orders-report.component';
import {PurchaseOrdersReportComponent} from './purchase-orders-report/purchase-orders-report.component';
import {PurchasesReportComponent} from './purchases-report/purchases-report.component';
import {CustomerPaymentsReportComponent} from './customer-payments-report/customer-payments-report.component';
import {SupplierPaymentsReportComponent} from './supplier-payments-report/supplier-payments-report.component';
import {SupplierReturnsReportComponent} from './supplier-returns-report/supplier-returns-report.component';
import {SupplierRefundsReportComponent} from './supplier-refunds-report/supplier-refunds-report.component';
import {DeliveriesReportComponent} from './deliveries-report/deliveries-report.component';
import {DisposalsReportComponent} from './disposals-report/disposals-report.component';

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
      {
        path: 'order-report',
        data: {roles: ['INV-RPT-SLE']},
        canActivate: [AuthGuardService],
        component: OrdersReportComponent,
      },
      {
        path: 'purchase-order-report',
        data: {roles: ['INV-RPT-SLE']},
        canActivate: [AuthGuardService],
        component: PurchaseOrdersReportComponent,
      },
      {
        path: 'purchase-report',
        data: {roles: ['INV-RPT-SLE']},
        canActivate: [AuthGuardService],
        component: PurchasesReportComponent,
      },
      {
        path: 'customer-payment-report',
        data: {roles: ['INV-RPT-SLE']},
        canActivate: [AuthGuardService],
        component: CustomerPaymentsReportComponent,
      },
      {
        path: 'supplier-payment-report',
        data: {roles: ['INV-RPT-SLE']},
        canActivate: [AuthGuardService],
        component: SupplierPaymentsReportComponent,
      },
      {
        path: 'supplier-return-report',
        data: {roles: ['INV-RPT-SLE']},
        canActivate: [AuthGuardService],
        component: SupplierReturnsReportComponent,
      },
      {
        path: 'supplier-refund-report',
        data: {roles: ['INV-RPT-SLE']},
        canActivate: [AuthGuardService],
        component: SupplierRefundsReportComponent,
      },
      {
        path: 'delivery-report',
        data: {roles: ['INV-RPT-SLE']},
        canActivate: [AuthGuardService],
        component: DeliveriesReportComponent,
      },
      {
        path: 'disposal-report',
        data: {roles: ['INV-RPT-SLE']},
        canActivate: [AuthGuardService],
        component: DisposalsReportComponent,
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
