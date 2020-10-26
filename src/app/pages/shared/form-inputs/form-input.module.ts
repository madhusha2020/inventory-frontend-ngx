import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputSelectDefaultComponent} from './input-select-default/input-select-default.component';
import { InputDefaultComponent } from './input-default/input-default.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormValidationModule} from '../form-validations/form-validation.module';
import {NbInputModule} from '@nebular/theme';



@NgModule({
  declarations: [
    InputSelectDefaultComponent,
    InputDefaultComponent
  ],
  exports: [
    InputDefaultComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormValidationModule,
    NbInputModule
  ]
})
export class FormInputModule { }
