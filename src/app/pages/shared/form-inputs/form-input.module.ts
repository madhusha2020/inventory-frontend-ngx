import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputDefaultComponent} from './input-default/input-default.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormValidationModule} from '../form-validations/form-validation.module';
import {NbButtonModule, NbDatepickerModule, NbInputModule, NbSelectModule} from '@nebular/theme';
import {InputComparatorDefaultComponent} from './input-comparator-default/input-comparator-default.component';
import {InputGeneratedPasswordDefaultComponent} from './input-generated-password-default/input-generated-password-default.component';
import {ImageUploadDefaultComponent} from './image-upload-default/image-upload-default.component';
import {InputDatePickerDefaultComponent} from './input-date-picker-default/input-date-picker-default.component';
import {InputDatePickerMaxDefaultComponent} from './input-date-picker-max-default/input-date-picker-max-default.component';
import {InputDatePickerMaxExceptTodayDefaultComponent} from './input-date-picker-max-except-today-default/input-date-picker-max-except-today-default.component';
import {InputAmountDefaultComponent} from './input-amount-default/input-amount-default.component';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import { InputDatePickerFutureDefaultComponent } from './input-date-picker-future-default/input-date-picker-future-default.component';
import { InputTextareaDefaultComponent } from './input-textarea-default/input-textarea-default.component';
import { InputSpinnerDefaultComponent } from './input-spinner-default/input-spinner-default.component';
import {NgSpinBoxModule} from 'ng-spin-box';


@NgModule({
  declarations: [
    InputDefaultComponent,
    InputComparatorDefaultComponent,
    InputGeneratedPasswordDefaultComponent,
    ImageUploadDefaultComponent,
    InputDatePickerDefaultComponent,
    InputDatePickerMaxDefaultComponent,
    InputDatePickerMaxExceptTodayDefaultComponent,
    InputAmountDefaultComponent,
    InputDatePickerFutureDefaultComponent,
    InputTextareaDefaultComponent,
    InputSpinnerDefaultComponent
  ],
    exports: [
        InputDefaultComponent,
        InputComparatorDefaultComponent,
        InputGeneratedPasswordDefaultComponent,
        ImageUploadDefaultComponent,
        InputDatePickerDefaultComponent,
        InputDatePickerMaxDefaultComponent,
        InputDatePickerMaxExceptTodayDefaultComponent,
        InputAmountDefaultComponent,
        InputDatePickerFutureDefaultComponent,
        InputTextareaDefaultComponent,
        InputSpinnerDefaultComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormValidationModule,
    NbInputModule,
    NbSelectModule,
    NbButtonModule,
    NbDatepickerModule,
    CurrencyMaskModule,
    NgSpinBoxModule
  ]
})
export class FormInputModule {
}
