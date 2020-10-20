import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalOverlaysComponent } from './modal-overlays.component';
import { DialogComponent } from './dialog/dialog.component';
import { WindowComponent } from './window/window.component';
import { PopoversComponent } from './popovers/popovers.component';
import { ToastrComponent } from './toastr/toastr.component';
import { TooltipComponent } from './tooltip/tooltip.component';
const routes = [{
        path: '',
        component: ModalOverlaysComponent,
        children: [
            {
                path: 'dialog',
                component: DialogComponent,
            },
            {
                path: 'window',
                component: WindowComponent,
            },
            {
                path: 'popover',
                component: PopoversComponent,
            },
            {
                path: 'tooltip',
                component: TooltipComponent,
            },
            {
                path: 'toastr',
                component: ToastrComponent,
            },
        ],
    }];
let ModalOverlaysRoutingModule = class ModalOverlaysRoutingModule {
};
ModalOverlaysRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ModalOverlaysRoutingModule);
export { ModalOverlaysRoutingModule };
//# sourceMappingURL=modal-overlays-routing.module.js.map