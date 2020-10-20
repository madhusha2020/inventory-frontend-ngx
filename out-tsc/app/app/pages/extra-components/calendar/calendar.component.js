import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NbDateService } from '@nebular/theme';
import { DayCellComponent } from './day-cell/day-cell.component';
let CalendarComponent = class CalendarComponent {
    constructor(dateService) {
        this.dateService = dateService;
        this.date = new Date();
        this.date2 = new Date();
        this.dayCellComponent = DayCellComponent;
        this.range = {
            start: this.dateService.addDay(this.monthStart, 3),
            end: this.dateService.addDay(this.monthEnd, -3),
        };
    }
    get monthStart() {
        return this.dateService.getMonthStart(new Date());
    }
    get monthEnd() {
        return this.dateService.getMonthEnd(new Date());
    }
};
CalendarComponent = __decorate([
    Component({
        selector: 'ngx-calendar',
        templateUrl: 'calendar.component.html',
        styleUrls: ['calendar.component.scss'],
        entryComponents: [DayCellComponent],
    }),
    __metadata("design:paramtypes", [NbDateService])
], CalendarComponent);
export { CalendarComponent };
//# sourceMappingURL=calendar.component.js.map