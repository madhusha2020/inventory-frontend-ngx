import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerMainComponent } from './customer-main/customer-main.component';
import { CustomerComponent } from './customer.component';
const routes = [
    {
        path: '',
        component: CustomerComponent,
        children: [
            {
                path: 'main',
                component: CustomerMainComponent,
            }
        ],
    },
];
let CustomerRoutingModule = class CustomerRoutingModule {
};
CustomerRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CustomerRoutingModule);
export { CustomerRoutingModule };
//# sourceMappingURL=customer-routing.module.js.map