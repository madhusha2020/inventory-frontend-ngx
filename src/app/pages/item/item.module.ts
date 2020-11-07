import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import {ItemComponent} from './item.component';
import { ItemMainComponent } from './item-main/item-main.component';
import { ItemCreateComponent } from './item-create/item-create.component';


@NgModule({
  declarations: [ItemComponent, ItemMainComponent, ItemCreateComponent],
  imports: [
    CommonModule,
    ItemRoutingModule
  ]
})
export class ItemModule { }
