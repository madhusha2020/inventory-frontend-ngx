import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { PeriodsService } from './periods.service';
import { UserActivityData } from '../data/user-activity';
let UserActivityService = class UserActivityService extends UserActivityData {
    constructor(periods) {
        super();
        this.periods = periods;
        this.getRandom = (roundTo) => Math.round(Math.random() * roundTo);
        this.data = {};
        this.data = {
            week: this.getDataWeek(),
            month: this.getDataMonth(),
            year: this.getDataYear(),
        };
    }
    generateUserActivityRandomData(date) {
        return {
            date,
            pagesVisitCount: this.getRandom(1000),
            deltaUp: this.getRandom(1) % 2 === 0,
            newVisits: this.getRandom(100),
        };
    }
    getDataWeek() {
        return this.periods.getWeeks().map((week) => {
            return this.generateUserActivityRandomData(week);
        });
    }
    getDataMonth() {
        const currentDate = new Date();
        const days = currentDate.getDate();
        const month = this.periods.getMonths()[currentDate.getMonth()];
        return Array.from(Array(days)).map((_, index) => {
            const date = `${index + 1} ${month}`;
            return this.generateUserActivityRandomData(date);
        });
    }
    getDataYear() {
        return this.periods.getYears().map((year) => {
            return this.generateUserActivityRandomData(year);
        });
    }
    getUserActivityData(period) {
        return observableOf(this.data[period]);
    }
};
UserActivityService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PeriodsService])
], UserActivityService);
export { UserActivityService };
//# sourceMappingURL=user-activity.service.js.map