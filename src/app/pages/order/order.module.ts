import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import {OrderComponent} from './order.component';
import { OrderMainComponent } from './order-main/order-main.component';
import { OrderCreateComponent } from './order-create/order-create.component';


@NgModule({
  declarations: [OrderComponent, OrderMainComponent, OrderCreateComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
