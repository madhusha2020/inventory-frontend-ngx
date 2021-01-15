import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChemicalTestRoutingModule } from './chemical-test-routing.module';
import { ChemicalTestMainComponent } from './chemical-test-main/chemical-test-main.component';
import { ChemicalTestCreateComponent } from './chemical-test-create/chemical-test-create.component';
import {ChemicalTestComponent} from './chemical-test.component';
import { ChemicalTestViewComponent } from './chemical-test-view/chemical-test-view.component';
import {NbButtonModule, NbCardModule, NbSearchModule, NbTabsetModule, NbTooltipModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {FormInputModule} from '../shared/form-inputs/form-input.module';


@NgModule({
  declarations: [ChemicalTestComponent, ChemicalTestMainComponent, ChemicalTestCreateComponent, ChemicalTestViewComponent],
  imports: [
    CommonModule,
    ChemicalTestRoutingModule,
    NbCardModule,
    NbSearchModule,
    NbTooltipModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbTabsetModule,
    FormInputModule
  ]
})
export class ChemicalTestModule { }
