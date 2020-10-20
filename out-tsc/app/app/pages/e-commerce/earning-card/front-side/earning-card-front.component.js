import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { interval } from 'rxjs';
import { switchMap, takeWhile } from 'rxjs/operators';
import { EarningData } from '../../../../@core/data/earning';
let EarningCardFrontComponent = class EarningCardFrontComponent {
    constructor(themeService, earningService) {
        this.themeService = themeService;
        this.earningService = earningService;
        this.alive = true;
        this.selectedCurrency = 'Bitcoin';
        this.currencies = ['Bitcoin', 'Tether', 'Ethereum'];
        this.themeService.getJsTheme()
            .pipe(takeWhile(() => this.alive))
            .subscribe(theme => {
            this.currentTheme = theme.name;
        });
    }
    ngOnInit() {
        this.getEarningCardData(this.selectedCurrency);
    }
    changeCurrency(currency) {
        if (this.selectedCurrency !== currency) {
            this.selectedCurrency = currency;
            this.getEarningCardData(this.selectedCurrency);
        }
    }
    getEarningCardData(currency) {
        this.earningService.getEarningCardData(currency)
            .pipe(takeWhile(() => this.alive))
            .subscribe((earningLiveUpdateCardData) => {
            this.earningLiveUpdateCardData = earningLiveUpdateCardData;
            this.liveUpdateChartData = earningLiveUpdateCardData.liveChart;
            this.startReceivingLiveData(currency);
        });
    }
    startReceivingLiveData(currency) {
        if (this.intervalSubscription) {
            this.intervalSubscription.unsubscribe();
        }
        this.intervalSubscription = interval(200)
            .pipe(takeWhile(() => this.alive), switchMap(() => this.earningService.getEarningLiveUpdateCardData(currency)))
            .subscribe((liveUpdateChartData) => {
            this.liveUpdateChartData = [...liveUpdateChartData];
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], EarningCardFrontComponent.prototype, "selectedCurrency", void 0);
EarningCardFrontComponent = __decorate([
    Component({
        selector: 'ngx-earning-card-front',
        styleUrls: ['./earning-card-front.component.scss'],
        templateUrl: './earning-card-front.component.html',
    }),
    __metadata("design:paramtypes", [NbThemeService,
        EarningData])
], EarningCardFrontComponent);
export { EarningCardFrontComponent };
//# sourceMappingURL=earning-card-front.component.js.map