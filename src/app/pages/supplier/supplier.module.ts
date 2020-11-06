import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import {SupplierComponent} from './suppler.component';
import { SupplierMainComponent } from './supplier-main/supplier-main.component';
import { SupplierCreateComponent } from './supplier-create/supplier-create.component';


@NgModule({
  declarations: [SupplierComponent, SupplierMainComponent, SupplierCreateComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule
  ]
})
export class SupplierModule { }
