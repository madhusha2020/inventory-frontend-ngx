import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrnRoutingModule } from './grn-routing.module';
import {GrnComponent} from './grn.component';
import { GrnMainComponent } from './grn-main/grn-main.component';
import { GrnCreateComponent } from './grn-create/grn-create.component';
import { GrnReturnComponent } from './grn-return/grn-return.component';
import { GrnReturnCreateComponent } from './grn-return-create/grn-return-create.component';
import { GrnRefundCreateComponent } from './grn-refund-create/grn-refund-create.component';
import { GrnRefundComponent } from './grn-refund/grn-refund.component';


@NgModule({
  declarations: [GrnComponent, GrnMainComponent, GrnCreateComponent, GrnReturnComponent, GrnReturnCreateComponent, GrnRefundCreateComponent, GrnRefundComponent],
  imports: [
    CommonModule,
    GrnRoutingModule
  ]
})
export class GrnModule { }