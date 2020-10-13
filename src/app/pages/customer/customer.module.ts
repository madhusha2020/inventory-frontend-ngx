import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerMainComponent} from './customer-main/customer-main.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerComponent} from './customer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ThemeModule} from '../../@theme/theme.module';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule,
  NbUserModule,
} from '@nebular/theme';
import {Ng2SmartTableModule} from "ng2-smart-table";


@NgModule({
  declarations: [
    CustomerMainComponent,
    CustomerCreateComponent,
    CustomerComponent],
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
    ],
})
export class CustomerModule {
}
