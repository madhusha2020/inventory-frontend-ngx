import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import {SupplierComponent} from './suppler.component';
import { SupplierMainComponent } from './supplier-main/supplier-main.component';
import { SupplierCreateComponent } from './supplier-create/supplier-create.component';
import { SupplierViewComponent } from './supplier-view/supplier-view.component';
import {
    NbButtonModule,
    NbCardModule,
    NbSearchModule,
    NbSelectModule,
    NbStepperModule, NbTabsetModule,
    NbTooltipModule
} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {FormInputModule} from '../shared/form-inputs/form-input.module';
import {ReactiveFormsModule} from '@angular/forms';
import {PermissionModule} from '../shared/permission/permission.module';


@NgModule({
  declarations: [SupplierComponent, SupplierMainComponent, SupplierCreateComponent, SupplierViewComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    NbCardModule,
    NbSearchModule,
    Ng2SmartTableModule,
    NbTooltipModule,
    NbButtonModule,
    NbStepperModule,
    FormInputModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbTabsetModule,
    PermissionModule
  ]
})
export class SupplierModule { }
