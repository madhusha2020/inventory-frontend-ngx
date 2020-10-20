import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NbMediaBreakpointsService, NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
let ChartPanelHeaderComponent = class ChartPanelHeaderComponent {
    constructor(themeService, breakpointService) {
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.alive = true;
        this.periodChange = new EventEmitter();
        this.type = 'week';
        this.types = ['week', 'month', 'year'];
        this.breakpoint = { name: '', width: 0 };
        this.themeService.getJsTheme()
            .pipe(takeWhile(() => this.alive))
            .subscribe(theme => {
            const orderProfitLegend = theme.variables.orderProfitLegend;
            this.currentTheme = theme.name;
            this.setLegendItems(orderProfitLegend);
        });
        this.breakpoints = this.breakpointService.getBreakpointsMap();
        this.themeService.onMediaQueryChange()
            .pipe(takeWhile(() => this.alive))
            .subscribe(([oldValue, newValue]) => {
            this.breakpoint = newValue;
        });
    }
    setLegendItems(orderProfitLegend) {
        this.chartLegend = [
            {
                iconColor: orderProfitLegend.firstItem,
                title: 'Payment',
            },
            {
                iconColor: orderProfitLegend.secondItem,
                title: 'Canceled',
            },
            {
                iconColor: orderProfitLegend.thirdItem,
                title: 'All orders',
            },
        ];
    }
    changePeriod(period) {
        this.type = period;
        this.periodChange.emit(period);
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], ChartPanelHeaderComponent.prototype, "periodChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ChartPanelHeaderComponent.prototype, "type", void 0);
ChartPanelHeaderComponent = __decorate([
    Component({
        selector: 'ngx-chart-panel-header',
        styleUrls: ['./chart-panel-header.component.scss'],
        templateUrl: './chart-panel-header.component.html',
    }),
    __metadata("design:paramtypes", [NbThemeService,
        NbMediaBreakpointsService])
], ChartPanelHeaderComponent);
export { ChartPanelHeaderComponent };
//# sourceMappingURL=chart-panel-header.component.js.map