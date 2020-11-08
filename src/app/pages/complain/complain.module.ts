import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplainRoutingModule } from './complain-routing.module';
import {ComplainComponent} from './complain.component';
import { ComplainMainComponent } from './complain-main/complain-main.component';
import { ComplainCreateComponent } from './complain-create/complain-create.component';
import { ComplainViewComponent } from './complain-view/complain-view.component';


@NgModule({
  declarations: [ComplainComponent, ComplainMainComponent, ComplainCreateComponent, ComplainViewComponent],
  imports: [
    CommonModule,
    ComplainRoutingModule
  ]
})
export class ComplainModule { }
