import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import {EmployeeComponent} from './employee.component';
import { EmployeeMainComponent } from './employee-main/employee-main.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import {NbButtonModule, NbCardModule, NbSearchModule, NbTooltipModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';


@NgModule({
  declarations: [EmployeeComponent, EmployeeMainComponent, EmployeeCreateComponent, EmployeeViewComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    NbSearchModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbTooltipModule,
    NbButtonModule
  ]
})
export class EmployeeModule { }
