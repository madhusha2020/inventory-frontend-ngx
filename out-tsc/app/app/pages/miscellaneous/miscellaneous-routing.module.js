import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes = [
    {
        path: '',
        component: MiscellaneousComponent,
        children: [
            {
                path: '404',
                component: NotFoundComponent,
            },
        ],
    },
];
let MiscellaneousRoutingModule = class MiscellaneousRoutingModule {
};
MiscellaneousRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], MiscellaneousRoutingModule);
export { MiscellaneousRoutingModule };
//# sourceMappingURL=miscellaneous-routing.module.js.map