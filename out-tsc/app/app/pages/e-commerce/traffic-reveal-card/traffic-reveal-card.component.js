import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { TrafficListData } from '../../../@core/data/traffic-list';
import { TrafficBarData } from '../../../@core/data/traffic-bar';
import { takeWhile } from 'rxjs/operators';
let TrafficRevealCardComponent = class TrafficRevealCardComponent {
    constructor(trafficListService, trafficBarService) {
        this.trafficListService = trafficListService;
        this.trafficBarService = trafficBarService;
        this.alive = true;
        this.revealed = false;
        this.period = 'week';
        this.getTrafficFrontCardData(this.period);
        this.getTrafficBackCardData(this.period);
    }
    toggleView() {
        this.revealed = !this.revealed;
    }
    setPeriodAngGetData(value) {
        this.period = value;
        this.getTrafficFrontCardData(value);
        this.getTrafficBackCardData(value);
    }
    getTrafficBackCardData(period) {
        this.trafficBarService.getTrafficBarData(period)
            .pipe(takeWhile(() => this.alive))
            .subscribe(trafficBarData => {
            this.trafficBarData = trafficBarData;
        });
    }
    getTrafficFrontCardData(period) {
        this.trafficListService.getTrafficListData(period)
            .pipe(takeWhile(() => this.alive))
            .subscribe(trafficListData => {
            this.trafficListData = trafficListData;
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
TrafficRevealCardComponent = __decorate([
    Component({
        selector: 'ngx-traffic-reveal-card',
        styleUrls: ['./traffic-reveal-card.component.scss'],
        templateUrl: './traffic-reveal-card.component.html',
    }),
    __metadata("design:paramtypes", [TrafficListData,
        TrafficBarData])
], TrafficRevealCardComponent);
export { TrafficRevealCardComponent };
//# sourceMappingURL=traffic-reveal-card.component.js.map