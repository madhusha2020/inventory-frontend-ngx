import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { Tab1Component, Tab2Component, TabsComponent } from './tabs/tabs.component';
import { AccordionComponent } from './accordion/accordion.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';
const routes = [{
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'stepper',
                component: StepperComponent,
            },
            {
                path: 'list',
                component: ListComponent,
            },
            {
                path: 'infinite-list',
                component: InfiniteListComponent,
            },
            {
                path: 'accordion',
                component: AccordionComponent,
            },
            {
                path: 'tabs',
                component: TabsComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'tab1',
                        pathMatch: 'full',
                    },
                    {
                        path: 'tab1',
                        component: Tab1Component,
                    },
                    {
                        path: 'tab2',
                        component: Tab2Component,
                    },
                ],
            },
        ],
    }];
let LayoutRoutingModule = class LayoutRoutingModule {
};
LayoutRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], LayoutRoutingModule);
export { LayoutRoutingModule };
//# sourceMappingURL=layout-routing.module.js.map