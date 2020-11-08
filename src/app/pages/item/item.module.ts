import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import {ItemComponent} from './item.component';
import { ItemMainComponent } from './item-main/item-main.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemDisposeComponent } from './item-dispose/item-dispose.component';
import { ItemViewComponent } from './item-view/item-view.component';


@NgModule({
  declarations: [ItemComponent, ItemMainComponent, ItemCreateComponent, ItemDisposeComponent, ItemViewComponent],
  imports: [
    CommonModule,
    ItemRoutingModule
  ]
})
export class ItemModule { }
