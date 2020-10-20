import { __decorate } from "tslib";
import { Component } from '@angular/core';
let InteractiveProgressBarComponent = class InteractiveProgressBarComponent {
    constructor() {
        this.value = 25;
    }
    get status() {
        if (this.value <= 25) {
            return 'danger';
        }
        else if (this.value <= 50) {
            return 'warning';
        }
        else if (this.value <= 75) {
            return 'info';
        }
        else {
            return 'success';
        }
    }
    get canIncrease() {
        return this.value < 100;
    }
    get canDecrease() {
        return this.value > 0;
    }
    decreaseValue() {
        if (this.value > 0) {
            this.value -= 25;
        }
    }
    increaseValue() {
        if (this.value < 100) {
            this.value += 25;
        }
    }
};
InteractiveProgressBarComponent = __decorate([
    Component({
        selector: 'ngx-interactive-progress-bar',
        templateUrl: 'interactive-progress-bar.component.html',
        styleUrls: ['interactive-progress-bar.component.scss'],
    })
], InteractiveProgressBarComponent);
export { InteractiveProgressBarComponent };
//# sourceMappingURL=interactive-progress-bar.component.js.map