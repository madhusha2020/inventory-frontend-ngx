import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NbThemeService } from '@nebular/theme';
import { VisitorsAnalyticsData } from '../../../@core/data/visitors-analytics';
import { forkJoin } from 'rxjs';
let ECommerceVisitorsAnalyticsComponent = class ECommerceVisitorsAnalyticsComponent {
    constructor(themeService, visitorsAnalyticsChartService) {
        this.themeService = themeService;
        this.visitorsAnalyticsChartService = visitorsAnalyticsChartService;
        this.alive = true;
        this.themeService.getJsTheme()
            .pipe(takeWhile(() => this.alive))
            .subscribe(theme => {
            this.setLegendItems(theme.variables.visitorsLegend);
        });
        forkJoin(this.visitorsAnalyticsChartService.getInnerLineChartData(), this.visitorsAnalyticsChartService.getOutlineLineChartData(), this.visitorsAnalyticsChartService.getPieChartData())
            .pipe(takeWhile(() => this.alive))
            .subscribe(([innerLine, outerLine, pieChartValue]) => {
            this.visitorsAnalyticsData = {
                innerLine: innerLine,
                outerLine: outerLine,
            };
            this.pieChartValue = pieChartValue;
        });
    }
    setLegendItems(visitorsLegend) {
        this.chartLegend = [
            {
                iconColor: visitorsLegend.firstIcon,
                title: 'Unique Visitors',
            },
            {
                iconColor: visitorsLegend.secondIcon,
                title: 'Page Views',
            },
        ];
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
ECommerceVisitorsAnalyticsComponent = __decorate([
    Component({
        selector: 'ngx-ecommerce-visitors-analytics',
        styleUrls: ['./visitors-analytics.component.scss'],
        templateUrl: './visitors-analytics.component.html',
    }),
    __metadata("design:paramtypes", [NbThemeService,
        VisitorsAnalyticsData])
], ECommerceVisitorsAnalyticsComponent);
export { ECommerceVisitorsAnalyticsComponent };
//# sourceMappingURL=visitors-analytics.component.js.map