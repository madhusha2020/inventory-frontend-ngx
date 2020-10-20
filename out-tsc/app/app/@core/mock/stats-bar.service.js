import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { StatsBarData } from '../data/stats-bar';
let StatsBarService = class StatsBarService extends StatsBarData {
    constructor() {
        super(...arguments);
        this.statsBarData = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
    }
    getStatsBarData() {
        return observableOf(this.statsBarData);
    }
};
StatsBarService = __decorate([
    Injectable()
], StatsBarService);
export { StatsBarService };
//# sourceMappingURL=stats-bar.service.js.map