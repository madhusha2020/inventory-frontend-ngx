import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ProfitCardComponent = class ProfitCardComponent {
    constructor() {
        this.flipped = false;
    }
    toggleView() {
        this.flipped = !this.flipped;
    }
};
ProfitCardComponent = __decorate([
    Component({
        selector: 'ngx-profit-card',
        styleUrls: ['./profit-card.component.scss'],
        templateUrl: './profit-card.component.html',
    })
], ProfitCardComponent);
export { ProfitCardComponent };
//# sourceMappingURL=profit-card.component.js.map