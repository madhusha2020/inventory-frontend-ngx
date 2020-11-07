import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import {SaleComponent} from './sale.component';
import { SaleMainComponent } from './sale-main/sale-main.component';


@NgModule({
  declarations: [SaleComponent, SaleMainComponent],
  imports: [
    CommonModule,
    SaleRoutingModule
  ]
})
export class SaleModule { }
