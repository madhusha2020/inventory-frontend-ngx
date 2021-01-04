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
import {
    NbButtonModule,
    NbCardModule,
    NbSearchModule,
    NbStepperModule,
    NbTabsetModule,
    NbTooltipModule
} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ItemModule} from '../item/item.module';
import { InventoryDisposalCreateComponent } from './inventory-disposal-create/inventory-disposal-create.component';
import {FormInputModule} from '../shared/form-inputs/form-input.module';
import {ReactiveFormsModule} from '@angular/forms';


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
    InventoryDisposalViewComponent,
    InventoryDisposalCreateComponent],
    imports: [
        CommonModule,
        InventoryRoutingModule,
        NbCardModule,
        NbSearchModule,
        Ng2SmartTableModule,
        NbButtonModule,
        NbTooltipModule,
        ItemModule,
        NbTabsetModule,
        FormInputModule,
        ReactiveFormsModule,
        NbStepperModule
    ]
})
export class InventoryModule {
}
