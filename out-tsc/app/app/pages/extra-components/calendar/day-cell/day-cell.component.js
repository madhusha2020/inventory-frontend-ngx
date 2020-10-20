import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { NbCalendarDayCellComponent } from '@nebular/theme';
let DayCellComponent = class DayCellComponent extends NbCalendarDayCellComponent {
};
DayCellComponent = __decorate([
    Component({
        selector: 'ngx-day-cell',
        templateUrl: 'day-cell.component.html',
        styleUrls: ['day-cell.component.scss'],
        host: { '(click)': 'onClick()', 'class': 'day-cell' },
    })
], DayCellComponent);
export { DayCellComponent };
//# sourceMappingURL=day-cell.component.js.map