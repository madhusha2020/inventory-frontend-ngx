import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { TrafficChartData } from '../data/traffic-chart';
let TrafficChartService = class TrafficChartService extends TrafficChartData {
    constructor() {
        super(...arguments);
        this.data = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
    }
    getTrafficChartData() {
        return observableOf(this.data);
    }
};
TrafficChartService = __decorate([
    Injectable()
], TrafficChartService);
export { TrafficChartService };
//# sourceMappingURL=traffic-chart.service.js.map