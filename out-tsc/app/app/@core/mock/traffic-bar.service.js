import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { PeriodsService } from './periods.service';
import { TrafficBarData } from '../data/traffic-bar';
let TrafficBarService = class TrafficBarService extends TrafficBarData {
    constructor(period) {
        super();
        this.period = period;
        this.data = {};
        this.data = {
            week: this.getDataForWeekPeriod(),
            month: this.getDataForMonthPeriod(),
            year: this.getDataForYearPeriod(),
        };
    }
    getDataForWeekPeriod() {
        return {
            data: [10, 15, 19, 7, 20, 13, 15],
            labels: this.period.getWeeks(),
            formatter: '{c0} MB',
        };
    }
    getDataForMonthPeriod() {
        return {
            data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
            labels: this.period.getMonths(),
            formatter: '{c0} GB',
        };
    }
    getDataForYearPeriod() {
        return {
            data: [10, 15, 19, 7, 20, 13, 15, 19, 11],
            labels: this.period.getYears(),
            formatter: '{c0} GB',
        };
    }
    getTrafficBarData(period) {
        return observableOf(this.data[period]);
    }
};
TrafficBarService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PeriodsService])
], TrafficBarService);
export { TrafficBarService };
//# sourceMappingURL=traffic-bar.service.js.map