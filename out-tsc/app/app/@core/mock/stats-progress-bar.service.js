import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { StatsProgressBarData } from '../data/stats-progress-bar';
let StatsProgressBarService = class StatsProgressBarService extends StatsProgressBarData {
    constructor() {
        super(...arguments);
        this.progressInfoData = [
            {
                title: 'Today’s Profit',
                value: 572900,
                activeProgress: 70,
                description: 'Better than last week (70%)',
            },
            {
                title: 'New Orders',
                value: 6378,
                activeProgress: 30,
                description: 'Better than last week (30%)',
            },
            {
                title: 'New Comments',
                value: 200,
                activeProgress: 55,
                description: 'Better than last week (55%)',
            },
        ];
    }
    getProgressInfoData() {
        return observableOf(this.progressInfoData);
    }
};
StatsProgressBarService = __decorate([
    Injectable()
], StatsProgressBarService);
export { StatsProgressBarService };
//# sourceMappingURL=stats-progress-bar.service.js.map