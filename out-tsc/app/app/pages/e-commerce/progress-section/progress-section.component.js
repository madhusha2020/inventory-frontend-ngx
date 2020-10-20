import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { StatsProgressBarData } from '../../../@core/data/stats-progress-bar';
import { takeWhile } from 'rxjs/operators';
let ECommerceProgressSectionComponent = class ECommerceProgressSectionComponent {
    constructor(statsProgressBarService) {
        this.statsProgressBarService = statsProgressBarService;
        this.alive = true;
        this.statsProgressBarService.getProgressInfoData()
            .pipe(takeWhile(() => this.alive))
            .subscribe((data) => {
            this.progressInfoData = data;
        });
    }
    ngOnDestroy() {
        this.alive = true;
    }
};
ECommerceProgressSectionComponent = __decorate([
    Component({
        selector: 'ngx-progress-section',
        styleUrls: ['./progress-section.component.scss'],
        templateUrl: './progress-section.component.html',
    }),
    __metadata("design:paramtypes", [StatsProgressBarData])
], ECommerceProgressSectionComponent);
export { ECommerceProgressSectionComponent };
//# sourceMappingURL=progress-section.component.js.map