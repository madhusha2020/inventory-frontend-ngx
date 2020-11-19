import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import {OrderComponent} from './order.component';
import { OrderMainComponent } from './order-main/order-main.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { OrderMainAllComponent } from './order-main-all/order-main-all.component';
import {NbButtonModule, NbCardModule, NbSearchModule, NbTooltipModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';


@NgModule({
  declarations: [OrderComponent, OrderMainComponent, OrderCreateComponent, OrderViewComponent, OrderMainAllComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbTooltipModule,
    Ng2SmartTableModule,
    NbSearchModule
  ]
})
export class OrderModule { }
