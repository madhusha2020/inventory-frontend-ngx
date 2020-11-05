import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDefaultComponent } from './input-default/input-default.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormValidationModule} from '../form-validations/form-validation.module';
import {NbInputModule, NbSelectModule} from '@nebular/theme';
import { InputComparatorDefaultComponent } from './input-comparator-default/input-comparator-default.component';
import { InputGeneratedPasswordDefaultComponent } from './input-generated-password-default/input-generated-password-default.component';



@NgModule({
  declarations: [
    InputDefaultComponent,
    InputComparatorDefaultComponent,
    InputGeneratedPasswordDefaultComponent
  ],
  exports: [
    InputDefaultComponent,
    InputComparatorDefaultComponent,
    InputGeneratedPasswordDefaultComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormValidationModule,
    NbInputModule,
    NbSelectModule
  ]
})
export class FormInputModule { }
