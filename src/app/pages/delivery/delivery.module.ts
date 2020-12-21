import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryMainComponent } from './delivery-main/delivery-main.component';
import { DeliveryUpdateComponent } from './delivery-update/delivery-update.component';
import {DeliveryComponent} from './delivery.component';
import {
  NbButtonModule,
  NbCardModule,
  NbSearchModule,
  NbSelectModule,
  NbTabsetModule,
  NbTooltipModule
} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {FormInputModule} from '../shared/form-inputs/form-input.module';
import {PermissionModule} from '../shared/permission/permission.module';


@NgModule({
  declarations: [DeliveryComponent, DeliveryMainComponent, DeliveryUpdateComponent],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    NbCardModule,
    NbSearchModule,
    NbTooltipModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbTabsetModule,
    FormInputModule,
    NbSelectModule,
    PermissionModule
  ]
})
export class DeliveryModule { }
