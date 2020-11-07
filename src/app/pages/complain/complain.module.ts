import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplainRoutingModule } from './complain-routing.module';
import {ComplainComponent} from './complain.component';
import { ComplainMainComponent } from './complain-main/complain-main.component';
import { ComplainCreateComponent } from './complain-create/complain-create.component';


@NgModule({
  declarations: [ComplainComponent, ComplainMainComponent, ComplainCreateComponent],
  imports: [
    CommonModule,
    ComplainRoutingModule
  ]
})
export class ComplainModule { }
