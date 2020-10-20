import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let TrafficBarComponent = class TrafficBarComponent {
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TrafficBarComponent.prototype, "barData", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TrafficBarComponent.prototype, "successDelta", void 0);
TrafficBarComponent = __decorate([
    Component({
        selector: 'ngx-traffic-bar',
        styleUrls: ['./traffic-bar.component.scss'],
        templateUrl: './traffic-bar.component.html',
    })
], TrafficBarComponent);
export { TrafficBarComponent };
//# sourceMappingURL=traffic-bar.component.js.map