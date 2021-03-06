import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import {EmployeeComponent} from './employee.component';
import { EmployeeMainComponent } from './employee-main/employee-main.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import {
    NbButtonModule,
    NbCardModule,
    NbSearchModule,
    NbSelectModule,
    NbStepperModule, NbTabsetModule,
    NbTooltipModule
} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ReactiveFormsModule} from '@angular/forms';
import {FormInputModule} from '../shared/form-inputs/form-input.module';
import {PermissionModule} from '../shared/permission/permission.module';


@NgModule({
  declarations: [EmployeeComponent, EmployeeMainComponent, EmployeeCreateComponent, EmployeeViewComponent],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        NbSearchModule,
        Ng2SmartTableModule,
        NbCardModule,
        NbTooltipModule,
        NbButtonModule,
        ReactiveFormsModule,
        NbStepperModule,
        FormInputModule,
        NbSelectModule,
        NbTabsetModule,
        PermissionModule
    ]
})
export class EmployeeModule { }
