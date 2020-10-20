import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SpinnerComponent = class SpinnerComponent {
    constructor() {
        this.loading = false;
    }
    toggleLoadingAnimation() {
        this.loading = true;
        setTimeout(() => this.loading = false, 3000);
    }
};
SpinnerComponent = __decorate([
    Component({
        selector: 'ngx-spinner',
        templateUrl: 'spinner.component.html',
        styleUrls: ['spinner.component.scss'],
    })
], SpinnerComponent);
export { SpinnerComponent };
//# sourceMappingURL=spinner.component.js.map