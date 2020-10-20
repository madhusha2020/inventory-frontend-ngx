import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EarningCardComponent = class EarningCardComponent {
    constructor() {
        this.flipped = false;
    }
    toggleView() {
        this.flipped = !this.flipped;
    }
};
EarningCardComponent = __decorate([
    Component({
        selector: 'ngx-earning-card',
        styleUrls: ['./earning-card.component.scss'],
        templateUrl: './earning-card.component.html',
    })
], EarningCardComponent);
export { EarningCardComponent };
//# sourceMappingURL=earning-card.component.js.map