import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
let AccordionComponent = class AccordionComponent {
    toggle() {
        this.accordion.toggle();
    }
};
__decorate([
    ViewChild('item', { static: true }),
    __metadata("design:type", Object)
], AccordionComponent.prototype, "accordion", void 0);
AccordionComponent = __decorate([
    Component({
        selector: 'ngx-accordion',
        templateUrl: 'accordion.component.html',
        styleUrls: ['accordion.component.scss'],
    })
], AccordionComponent);
export { AccordionComponent };
//# sourceMappingURL=accordion.component.js.map