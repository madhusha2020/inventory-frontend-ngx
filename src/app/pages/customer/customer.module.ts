import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerMainComponent} from './customer-main/customer-main.component';
import {CustomerComponent} from './customer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ThemeModule} from '../../@theme/theme.module';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule, NbIconModule,
  NbListModule,
  NbRouteTabsetModule, NbSearchModule, NbSelectModule, NbSpinnerModule,
  NbStepperModule,
  NbTabsetModule, NbTooltipModule,
  NbUserModule,
} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import {FormInputModule} from '../shared/form-inputs/form-input.module';
import { CustomerViewComponent } from './customer-view/customer-view.component';


@NgModule({
  declarations: [
    CustomerMainComponent,
    CustomerComponent,
    CustomerCreateComponent,
    CustomerViewComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    Ng2SmartTableModule,
    NbSearchModule,
    NbSpinnerModule,
    NbTooltipModule,
    FormInputModule,
    NbIconModule,
    NbSelectModule,
  ],
})
export class CustomerModule {
}
