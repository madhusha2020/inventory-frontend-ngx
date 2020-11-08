import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {InventoryComponent} from './inventory.component';
import {InventoryMainComponent} from './inventory-main/inventory-main.component';
import {InventoryInboundMainComponent} from './inventory-inbound-main/inventory-inbound-main.component';
import {InventoryOutboundMainComponent} from './inventory-outbound-main/inventory-outbound-main.component';
import {InventoryDisposalMainComponent} from './inventory-disposal-main/inventory-disposal-main.component';
import {InventoryViewComponent} from './inventory-view/inventory-view.component';
import {InventoryInboundViewComponent} from './inventory-inbound-view/inventory-inbound-view.component';
import {InventoryOutboundViewComponent} from './inventory-outbound-view/inventory-outbound-view.component';
import {InventoryDisposalViewComponent} from './inventory-disposal-view/inventory-disposal-view.component';

const routes: Routes = [
  {
    path: '',
    data: {roles: ['INV-INV']},
    component: InventoryComponent,
    children: [
      {
        path: 'main',
        data: {roles: ['INV-INV-VW']},
        canActivate: [AuthGuardService],
        component: InventoryMainComponent,
      },
      {
        path: 'view',
        data: {roles: ['INV-INV-VW']},
        canActivate: [AuthGuardService],
        component: InventoryViewComponent,
      },
      {
        path: 'inbound-main',
        data: {roles: ['INV-INV-IN-VW']},
        canActivate: [AuthGuardService],
        component: InventoryInboundMainComponent,
      },
      {
        path: 'inbound-view',
        data: {roles: ['INV-INV-IN-VW']},
        canActivate: [AuthGuardService],
        component: InventoryInboundViewComponent,
      },
      {
        path: 'outbound-main',
        data: {roles: ['INV-INV-OUT-VW']},
        canActivate: [AuthGuardService],
        component: InventoryOutboundMainComponent,
      },
      {
        path: 'outbound-view',
        data: {roles: ['INV-INV-OUT-VW']},
        canActivate: [AuthGuardService],
        component: InventoryOutboundViewComponent,
      },
      {
        path: 'disposal-main',
        data: {roles: ['INV-INV-DIS-VW']},
        canActivate: [AuthGuardService],
        component: InventoryDisposalMainComponent,
      },
      {
        path: 'disposal-view',
        data: {roles: ['INV-INV-DIS-VW']},
        canActivate: [AuthGuardService],
        component: InventoryDisposalViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule {
}
