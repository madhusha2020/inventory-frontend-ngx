import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDefaultComponent } from './input-default/input-default.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormValidationModule} from '../form-validations/form-validation.module';
import {NbButtonModule, NbDatepickerModule, NbInputModule, NbSelectModule} from '@nebular/theme';
import { InputComparatorDefaultComponent } from './input-comparator-default/input-comparator-default.component';
import { InputGeneratedPasswordDefaultComponent } from './input-generated-password-default/input-generated-password-default.component';
import { ImageUploadDefaultComponent } from './image-upload-default/image-upload-default.component';
import { InputDatePickerDefaultComponent } from './input-date-picker-default/input-date-picker-default.component';
import { InputDatePickerMaxDefaultComponent } from './input-date-picker-max-default/input-date-picker-max-default.component';



@NgModule({
  declarations: [
    InputDefaultComponent,
    InputComparatorDefaultComponent,
    InputGeneratedPasswordDefaultComponent,
    ImageUploadDefaultComponent,
    InputDatePickerDefaultComponent,
    InputDatePickerMaxDefaultComponent
  ],
  exports: [
    InputDefaultComponent,
    InputComparatorDefaultComponent,
    InputGeneratedPasswordDefaultComponent,
    ImageUploadDefaultComponent,
    InputDatePickerDefaultComponent,
    InputDatePickerMaxDefaultComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormValidationModule,
        NbInputModule,
        NbSelectModule,
        NbButtonModule,
        NbDatepickerModule
    ]
})
export class FormInputModule { }
