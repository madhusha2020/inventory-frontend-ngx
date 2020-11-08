import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import {EmployeeComponent} from './employee.component';
import { EmployeeMainComponent } from './employee-main/employee-main.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';


@NgModule({
  declarations: [EmployeeComponent, EmployeeMainComponent, EmployeeCreateComponent, EmployeeViewComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
