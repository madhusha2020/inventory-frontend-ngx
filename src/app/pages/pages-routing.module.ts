import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ECommerceComponent} from './e-commerce/e-commerce.component';
import {NotFoundComponent} from './miscellaneous/not-found/not-found.component';
import {AuthGuardService} from '../service/auth/auth-guard.service';
import {UnauthorizedComponent} from './miscellaneous/unauthorized/unauthorized.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      data: {roles: ['INV']},
      canActivate: [AuthGuardService],
      component: ECommerceComponent,
    },
    {
      path: 'customer',
      loadChildren: () => import('./customer/customer.module')
        .then(m => m.CustomerModule),
    },
    {
      path: 'employee',
      loadChildren: () => import('./employee/employee.module')
        .then(m => m.EmployeeModule),
    },
    {
      path: 'supplier',
      loadChildren: () => import('./supplier/supplier.module')
        .then(m => m.SupplierModule),
    },
    {
      path: 'transport',
      loadChildren: () => import('./transport/transport.module')
        .then(m => m.TransportModule),
    },
    {
      path: 'user',
      loadChildren: () => import('./user/user.module')
        .then(m => m.UserModule),
    },
    {
      path: 'item',
      loadChildren: () => import('./item/item.module')
        .then(m => m.ItemModule),
    },
    {
      path: 'sale',
      loadChildren: () => import('./sale/sale.module')
        .then(m => m.SaleModule),
    },
    {
      path: 'order',
      loadChildren: () => import('./order/order.module')
        .then(m => m.OrderModule),
    },
    {
      path: 'purchase-order',
      loadChildren: () => import('./purchase-order/purchase-order.module')
        .then(m => m.PurchaseOrderModule),
    },
    {
      path: 'grn',
      loadChildren: () => import('./grn/grn.module')
        .then(m => m.GrnModule),
    },
    {
      path: 'payment',
      loadChildren: () => import('./payment/payment.module')
        .then(m => m.PaymentModule),
    },
    {
      path: 'test',
      loadChildren: () => import('./chemical-test/chemical-test.module')
        .then(m => m.ChemicalTestModule),
    },
    {
      path: 'notification',
      loadChildren: () => import('./notification/notification.module')
        .then(m => m.NotificationModule),
    },
    {
      path: 'complain',
      loadChildren: () => import('./complain/complain.module')
        .then(m => m.ComplainModule),
    },
    {
      path: 'iot-dashboard',
      data: {roles: ['INV']},
      canActivate: [AuthGuardService],
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '401',
      component: UnauthorizedComponent,
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
