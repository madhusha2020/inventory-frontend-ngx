import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let PeriodsService = class PeriodsService {
    getYears() {
        return [
            '2010', '2011', '2012',
            '2013', '2014', '2015',
            '2016', '2017', '2018',
        ];
    }
    getMonths() {
        return [
            'Jan', 'Feb', 'Mar',
            'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec',
        ];
    }
    getWeeks() {
        return [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun',
        ];
    }
};
PeriodsService = __decorate([
    Injectable()
], PeriodsService);
export { PeriodsService };
//# sourceMappingURL=periods.service.js.map