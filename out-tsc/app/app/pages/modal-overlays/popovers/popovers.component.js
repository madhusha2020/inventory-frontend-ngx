import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { NgxPopoverCardComponent, NgxPopoverFormComponent, NgxPopoverTabsComponent, } from './popover-examples.component';
let PopoversComponent = class PopoversComponent {
    constructor() {
        this.tabsComponent = NgxPopoverTabsComponent;
        this.cardComponent = NgxPopoverCardComponent;
        this.formComponent = NgxPopoverFormComponent;
    }
};
PopoversComponent = __decorate([
    Component({
        selector: 'ngx-popovers',
        styleUrls: ['./popovers.component.scss'],
        templateUrl: './popovers.component.html',
    })
], PopoversComponent);
export { PopoversComponent };
//# sourceMappingURL=popovers.component.js.map