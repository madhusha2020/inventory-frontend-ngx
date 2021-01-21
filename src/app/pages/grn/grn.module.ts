import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GrnRoutingModule} from './grn-routing.module';
import {GrnComponent} from './grn.component';
import {GrnMainComponent} from './grn-main/grn-main.component';
import {GrnCreateComponent} from './grn-create/grn-create.component';
import {GrnReturnComponent} from './grn-return/grn-return.component';
import {GrnReturnCreateComponent} from './grn-return-create/grn-return-create.component';
import {GrnRefundCreateComponent} from './grn-refund-create/grn-refund-create.component';
import {GrnRefundComponent} from './grn-refund/grn-refund.component';
import {GrnViewComponent} from './grn-view/grn-view.component';
import {GrnRefundViewComponent} from './grn-refund-view/grn-refund-view.component';
import {GrnReturnViewComponent} from './grn-return-view/grn-return-view.component';
import {
    NbButtonModule,
    NbCardModule,
    NbSearchModule,
    NbStepperModule,
    NbTabsetModule,
    NbTooltipModule
} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {FormInputModule} from '../shared/form-inputs/form-input.module';
import {ItemModule} from '../item/item.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    GrnComponent,
    GrnMainComponent,
    GrnCreateComponent,
    GrnReturnComponent,
    GrnReturnCreateComponent,
    GrnRefundCreateComponent,
    GrnRefundComponent,
    GrnViewComponent,
    GrnRefundViewComponent,
    GrnReturnViewComponent],
    imports: [
        CommonModule,
        GrnRoutingModule,
        NbCardModule,
        NbSearchModule,
        Ng2SmartTableModule,
        NbButtonModule,
        NbTooltipModule,
        NbTabsetModule,
        FormInputModule,
        ItemModule,
        ReactiveFormsModule,
        NbStepperModule
    ]
})
export class GrnModule {
}
