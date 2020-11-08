import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChemicalTestRoutingModule } from './chemical-test-routing.module';
import { ChemicalTestMainComponent } from './chemical-test-main/chemical-test-main.component';
import { ChemicalTestCreateComponent } from './chemical-test-create/chemical-test-create.component';
import {ChemicalTestComponent} from './chemical-test.component';
import { ChemicalTestViewComponent } from './chemical-test-view/chemical-test-view.component';


@NgModule({
  declarations: [ChemicalTestComponent, ChemicalTestMainComponent, ChemicalTestCreateComponent, ChemicalTestViewComponent],
  imports: [
    CommonModule,
    ChemicalTestRoutingModule
  ]
})
export class ChemicalTestModule { }
