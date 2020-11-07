import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportRoutingModule } from './transport-routing.module';
import {TransportComponent} from './transport.component';
import { TransportMainComponent } from './transport-main/transport-main.component';
import { TransportCreateComponent } from './transport-create/transport-create.component';


@NgModule({
  declarations: [TransportComponent, TransportMainComponent, TransportCreateComponent],
  imports: [
    CommonModule,
    TransportRoutingModule
  ]
})
export class TransportModule { }
