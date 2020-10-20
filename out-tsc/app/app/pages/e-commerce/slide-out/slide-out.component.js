import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let SlideOutComponent = class SlideOutComponent {
    constructor() {
        this.showVisitorsStatistics = false;
    }
    toggleStatistics() {
        this.showVisitorsStatistics = !this.showVisitorsStatistics;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SlideOutComponent.prototype, "showVisitorsStatistics", void 0);
SlideOutComponent = __decorate([
    Component({
        selector: 'ngx-slide-out',
        styleUrls: ['./slide-out.component.scss'],
        templateUrl: './slide-out.component.html',
    })
], SlideOutComponent);
export { SlideOutComponent };
//# sourceMappingURL=slide-out.component.js.map