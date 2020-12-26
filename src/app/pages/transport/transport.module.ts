import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportRoutingModule } from './transport-routing.module';
import {TransportComponent} from './transport.component';
import { TransportMainComponent } from './transport-main/transport-main.component';
import { TransportCreateComponent } from './transport-create/transport-create.component';
import { TransportViewComponent } from './transport-view/transport-view.component';
import {NbButtonModule, NbCardModule, NbSearchModule, NbStepperModule, NbTooltipModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {FormInputModule} from '../shared/form-inputs/form-input.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [TransportComponent, TransportMainComponent, TransportCreateComponent, TransportViewComponent],
    imports: [
        CommonModule,
        TransportRoutingModule,
        NbCardModule,
        NbTooltipModule,
        NbSearchModule,
        NbButtonModule,
        Ng2SmartTableModule,
        NbStepperModule,
        FormInputModule,
        ReactiveFormsModule
    ]
})
export class TransportModule { }
