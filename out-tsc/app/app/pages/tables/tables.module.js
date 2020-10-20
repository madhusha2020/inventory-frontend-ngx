import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
let TablesModule = class TablesModule {
};
TablesModule = __decorate([
    NgModule({
        imports: [
            NbCardModule,
            NbTreeGridModule,
            NbIconModule,
            NbInputModule,
            ThemeModule,
            TablesRoutingModule,
            Ng2SmartTableModule,
        ],
        declarations: [
            ...routedComponents,
            FsIconComponent,
        ],
    })
], TablesModule);
export { TablesModule };
//# sourceMappingURL=tables.module.js.map