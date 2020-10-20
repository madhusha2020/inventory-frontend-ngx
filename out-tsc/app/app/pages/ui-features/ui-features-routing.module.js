import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiFeaturesComponent } from './ui-features.component';
import { GridComponent } from './grid/grid.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { SearchComponent } from './search-fields/search-fields.component';
const routes = [{
        path: '',
        component: UiFeaturesComponent,
        children: [{
                path: 'grid',
                component: GridComponent,
            }, {
                path: 'icons',
                component: IconsComponent,
            }, {
                path: 'typography',
                component: TypographyComponent,
            }, {
                path: 'search-fields',
                component: SearchComponent,
            }],
    }];
let UiFeaturesRoutingModule = class UiFeaturesRoutingModule {
};
UiFeaturesRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], UiFeaturesRoutingModule);
export { UiFeaturesRoutingModule };
//# sourceMappingURL=ui-features-routing.module.js.map