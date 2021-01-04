import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ItemRoutingModule} from './item-routing.module';
import {ItemComponent} from './item.component';
import {ItemMainComponent} from './item-main/item-main.component';
import {ItemCreateComponent} from './item-create/item-create.component';
import {ItemDisposeComponent} from './item-dispose/item-dispose.component';
import {ItemViewComponent} from './item-view/item-view.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormInputModule} from '../shared/form-inputs/form-input.module';
import {
  NbButtonModule,
  NbCardModule,
  NbSearchModule,
  NbSelectModule,
  NbStepperModule,
  NbTooltipModule
} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { ListItemViewComponent } from './list-item-view/list-item-view.component';
import { ItemListCreateComponent } from './item-list-create/item-list-create.component';


@NgModule({
    declarations: [ItemComponent, ItemMainComponent, ItemCreateComponent, ItemDisposeComponent, ItemViewComponent, ListItemViewComponent, ItemListCreateComponent],
    exports: [
        ListItemViewComponent,
        ItemListCreateComponent
    ],
    imports: [
        CommonModule,
        ItemRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        FormInputModule,
        NbCardModule,
        NbSearchModule,
        Ng2SmartTableModule,
        NbButtonModule,
        NbTooltipModule,
        NbStepperModule,
        NbSelectModule
    ]
})
export class ItemModule {
}
