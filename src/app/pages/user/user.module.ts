import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserMainComponent } from './user-main/user-main.component';
import { UserComponent } from './user.component';
import {NbButtonModule, NbCardModule, NbIconModule, NbStepperModule} from '@nebular/theme';
import {DashboardModule} from '../dashboard/dashboard.module';
import { UserRoleComponent } from './user-role/user-role.component';
import {FormInputModule} from '../shared/form-inputs/form-input.module';
import {ReactiveFormsModule} from '@angular/forms';
import { UserRoleMainComponent } from './user-role-main/user-role-main.component';


@NgModule({
  declarations: [UserMainComponent, UserComponent, UserRoleComponent, UserRoleMainComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NbCardModule,
    NbIconModule,
    DashboardModule,
    NbButtonModule,
    NbStepperModule,
    FormInputModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
