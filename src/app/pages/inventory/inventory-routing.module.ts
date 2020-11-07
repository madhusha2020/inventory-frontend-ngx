import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../../service/auth/auth-guard.service';
import {InventoryComponent} from './inventory.component';
import {InventoryMainComponent} from './inventory-main/inventory-main.component';
import {InventoryInboundMainComponent} from './inventory-inbound-main/inventory-inbound-main.component';
import {InventoryOutboundMainComponent} from './inventory-outbound-main/inventory-outbound-main.component';
import {InventoryDisposalMainComponent} from './inventory-disposal-main/inventory-disposal-main.component';

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
        path: 'inbound-main',
        data: {roles: ['INV-INV-IN-VW']},
        canActivate: [AuthGuardService],
        component: InventoryInboundMainComponent,
      },
      {
        path: 'outbound-main',
        data: {roles: ['INV-INV-OUT-VW']},
        canActivate: [AuthGuardService],
        component: InventoryOutboundMainComponent,
      },
      {
        path: 'disposal-main',
        data: {roles: ['INV-INV-DIS-VW']},
        canActivate: [AuthGuardService],
        component: InventoryDisposalMainComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule {
}
