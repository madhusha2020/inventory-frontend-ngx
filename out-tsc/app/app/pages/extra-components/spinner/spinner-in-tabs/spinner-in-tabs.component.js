import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SpinnerInTabsComponent = class SpinnerInTabsComponent {
    constructor() {
        this.loading = false;
    }
    toggleLoadingAnimation() {
        this.loading = true;
        setTimeout(() => this.loading = false, 1000);
    }
};
SpinnerInTabsComponent = __decorate([
    Component({
        selector: 'ngx-spinner-in-tabs',
        templateUrl: 'spinner-in-tabs.component.html',
        styleUrls: ['spinner-in-tabs.component.scss'],
    })
], SpinnerInTabsComponent);
export { SpinnerInTabsComponent };
//# sourceMappingURL=spinner-in-tabs.component.js.map