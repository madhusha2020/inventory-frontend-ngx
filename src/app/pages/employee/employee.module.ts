import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import {EmployeeComponent} from './employee.component';
import { EmployeeMainComponent } from './employee-main/employee-main.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';


@NgModule({
  declarations: [EmployeeComponent, EmployeeMainComponent, EmployeeCreateComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
