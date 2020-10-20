import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SpinnerInButtonsComponent = class SpinnerInButtonsComponent {
    constructor() {
        this.loadingLargeGroup = false;
        this.loadingMediumGroup = false;
    }
    toggleLoadingLargeGroupAnimation() {
        this.loadingLargeGroup = true;
        setTimeout(() => this.loadingLargeGroup = false, 3000);
    }
    toggleLoadingMediumGroupAnimation() {
        this.loadingMediumGroup = true;
        setTimeout(() => this.loadingMediumGroup = false, 3000);
    }
};
SpinnerInButtonsComponent = __decorate([
    Component({
        selector: 'ngx-spinner-in-buttons',
        templateUrl: 'spinner-in-buttons.component.html',
        styleUrls: ['spinner-in-buttons.component.scss'],
    })
], SpinnerInButtonsComponent);
export { SpinnerInButtonsComponent };
//# sourceMappingURL=spinner-in-buttons.component.js.map