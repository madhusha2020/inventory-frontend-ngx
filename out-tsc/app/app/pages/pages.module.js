import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
let PagesModule = class PagesModule {
};
PagesModule = __decorate([
    NgModule({
        imports: [
            PagesRoutingModule,
            ThemeModule,
            NbMenuModule,
            DashboardModule,
            ECommerceModule,
            MiscellaneousModule,
        ],
        declarations: [
            PagesComponent,
        ],
    })
], PagesModule);
export { PagesModule };
//# sourceMappingURL=pages.module.js.map