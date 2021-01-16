import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseOrderRoutingModule } from './purchase-order-routing.module';
import {PurchaseOrderComponent} from './purchase-order.component';
import { PurchaseOrderCreateComponent } from './purchase-order-create/purchase-order-create.component';
import { PurchaseOrderMainComponent } from './purchase-order-main/purchase-order-main.component';
import { PurchaseOrderViewComponent } from './purchase-order-view/purchase-order-view.component';
import {
  NbButtonModule,
  NbCardModule,
  NbSearchModule,
  NbStepperModule,
  NbTabsetModule,
  NbTooltipModule
} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ReactiveFormsModule} from '@angular/forms';
import {FormInputModule} from '../shared/form-inputs/form-input.module';
import {ItemModule} from '../item/item.module';


@NgModule({
  declarations: [PurchaseOrderComponent, PurchaseOrderCreateComponent, PurchaseOrderMainComponent, PurchaseOrderViewComponent],
  imports: [
    CommonModule,
    PurchaseOrderRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbSearchModule,
    NbTooltipModule,
    NbButtonModule,
    NbStepperModule,
    ReactiveFormsModule,
    FormInputModule,
    ItemModule,
    NbTabsetModule
  ]
})
export class PurchaseOrderModule { }
