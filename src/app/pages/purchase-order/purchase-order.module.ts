import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseOrderRoutingModule } from './purchase-order-routing.module';
import {PurchaseOrderComponent} from './purchase-order.component';
import { PurchaseOrderCreateComponent } from './purchase-order-create/purchase-order-create.component';
import { PurchaseOrderMainComponent } from './purchase-order-main/purchase-order-main.component';
import { PurchaseOrderViewComponent } from './purchase-order-view/purchase-order-view.component';
import {NbButtonModule, NbCardModule, NbSearchModule, NbTooltipModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';


@NgModule({
  declarations: [PurchaseOrderComponent, PurchaseOrderCreateComponent, PurchaseOrderMainComponent, PurchaseOrderViewComponent],
  imports: [
    CommonModule,
    PurchaseOrderRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbSearchModule,
    NbTooltipModule,
    NbButtonModule
  ]
})
export class PurchaseOrderModule { }
