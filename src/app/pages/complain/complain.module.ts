import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplainRoutingModule } from './complain-routing.module';
import {ComplainComponent} from './complain.component';
import { ComplainMainComponent } from './complain-main/complain-main.component';
import { ComplainCreateComponent } from './complain-create/complain-create.component';
import { ComplainViewComponent } from './complain-view/complain-view.component';
import {NbButtonModule, NbCardModule, NbSearchModule, NbTooltipModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {FormInputModule} from '../shared/form-inputs/form-input.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ComplainComponent, ComplainMainComponent, ComplainCreateComponent, ComplainViewComponent],
  imports: [
    CommonModule,
    ComplainRoutingModule,
    NbCardModule,
    NbSearchModule,
    NbTooltipModule,
    NbButtonModule,
    Ng2SmartTableModule,
    FormInputModule,
    ReactiveFormsModule
  ]
})
export class ComplainModule { }
