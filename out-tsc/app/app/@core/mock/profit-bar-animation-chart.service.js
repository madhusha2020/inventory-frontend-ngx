import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { ProfitBarAnimationChartData } from '../data/profit-bar-animation-chart';
let ProfitBarAnimationChartService = class ProfitBarAnimationChartService extends ProfitBarAnimationChartData {
    constructor() {
        super();
        this.data = {
            firstLine: this.getDataForFirstLine(),
            secondLine: this.getDataForSecondLine(),
        };
    }
    getDataForFirstLine() {
        return this.createEmptyArray(100)
            .map((_, index) => {
            const oneFifth = index / 5;
            return (Math.sin(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        });
    }
    getDataForSecondLine() {
        return this.createEmptyArray(100)
            .map((_, index) => {
            const oneFifth = index / 5;
            return (Math.cos(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        });
    }
    createEmptyArray(nPoints) {
        return Array.from(Array(nPoints));
    }
    getChartData() {
        return observableOf(this.data);
    }
};
ProfitBarAnimationChartService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], ProfitBarAnimationChartService);
export { ProfitBarAnimationChartService };
//# sourceMappingURL=profit-bar-animation-chart.service.js.map