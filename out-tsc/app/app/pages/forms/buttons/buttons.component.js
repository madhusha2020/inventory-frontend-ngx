import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ButtonsComponent = class ButtonsComponent {
    constructor() {
        this.statuses = ['primary', 'success', 'info', 'warning', 'danger'];
        this.shapes = ['rectangle', 'semi-round', 'round'];
        this.sizes = ['tiny', 'small', 'medium', 'large', 'giant'];
    }
};
ButtonsComponent = __decorate([
    Component({
        selector: 'ngx-buttons',
        styleUrls: ['./buttons.component.scss'],
        templateUrl: './buttons.component.html',
    })
], ButtonsComponent);
export { ButtonsComponent };
//# sourceMappingURL=buttons.component.js.map