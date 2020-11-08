import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InventoryRoutingModule} from './inventory-routing.module';
import {InventoryComponent} from './inventory.component';
import {InventoryMainComponent} from './inventory-main/inventory-main.component';
import {InventoryInboundMainComponent} from './inventory-inbound-main/inventory-inbound-main.component';
import {InventoryOutboundMainComponent} from './inventory-outbound-main/inventory-outbound-main.component';
import {InventoryDisposalMainComponent} from './inventory-disposal-main/inventory-disposal-main.component';
import {InventoryViewComponent} from './inventory-view/inventory-view.component';
import {InventoryInboundViewComponent} from './inventory-inbound-view/inventory-inbound-view.component';
import {InventoryOutboundViewComponent} from './inventory-outbound-view/inventory-outbound-view.component';
import {InventoryDisposalViewComponent} from './inventory-disposal-view/inventory-disposal-view.component';


@NgModule({
  declarations: [
    InventoryComponent,
    InventoryMainComponent,
    InventoryInboundMainComponent,
    InventoryOutboundMainComponent,
    InventoryDisposalMainComponent,
    InventoryViewComponent,
    InventoryInboundViewComponent,
    InventoryOutboundViewComponent,
    InventoryDisposalViewComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule {
}
