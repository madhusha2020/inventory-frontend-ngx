import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import {InventoryComponent} from './inventory.component';
import { InventoryMainComponent } from './inventory-main/inventory-main.component';
import { InventoryInboundMainComponent } from './inventory-inbound-main/inventory-inbound-main.component';
import { InventoryOutboundMainComponent } from './inventory-outbound-main/inventory-outbound-main.component';
import { InventoryDisposalMainComponent } from './inventory-disposal-main/inventory-disposal-main.component';


@NgModule({
  declarations: [InventoryComponent, InventoryMainComponent, InventoryInboundMainComponent, InventoryOutboundMainComponent, InventoryDisposalMainComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
