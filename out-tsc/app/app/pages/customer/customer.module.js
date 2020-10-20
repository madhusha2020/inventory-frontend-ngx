import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerMainComponent } from './customer-main/customer-main.component';
import { CustomerComponent } from './customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbListModule, NbRouteTabsetModule, NbSearchModule, NbSpinnerModule, NbStepperModule, NbTabsetModule, NbTooltipModule, NbUserModule, } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
let CustomerModule = class CustomerModule {
};
CustomerModule = __decorate([
    NgModule({
        declarations: [
            CustomerMainComponent,
            CustomerComponent
        ],
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
        ],
    })
], CustomerModule);
export { CustomerModule };
//# sourceMappingURL=customer.module.js.map