import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import {SaleComponent} from './sale.component';
import { SaleMainComponent } from './sale-main/sale-main.component';
import { SaleViewComponent } from './sale-view/sale-view.component';
import {NbButtonModule, NbCardModule, NbSearchModule, NbTooltipModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';


@NgModule({
  declarations: [SaleComponent, SaleMainComponent, SaleViewComponent],
  imports: [
    CommonModule,
    SaleRoutingModule,
    NbCardModule,
    NbSearchModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbTooltipModule
  ]
})
export class SaleModule { }
