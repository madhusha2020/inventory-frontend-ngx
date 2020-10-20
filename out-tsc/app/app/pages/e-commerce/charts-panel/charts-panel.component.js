import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { OrdersChartComponent } from './charts/orders-chart.component';
import { ProfitChartComponent } from './charts/profit-chart.component';
import { OrdersProfitChartData } from '../../../@core/data/orders-profit-chart';
let ECommerceChartsPanelComponent = class ECommerceChartsPanelComponent {
    constructor(ordersProfitChartService) {
        this.ordersProfitChartService = ordersProfitChartService;
        this.alive = true;
        this.period = 'week';
        this.ordersProfitChartService.getOrderProfitChartSummary()
            .pipe(takeWhile(() => this.alive))
            .subscribe((summary) => {
            this.chartPanelSummary = summary;
        });
        this.getOrdersChartData(this.period);
        this.getProfitChartData(this.period);
    }
    setPeriodAndGetChartData(value) {
        if (this.period !== value) {
            this.period = value;
        }
        this.getOrdersChartData(value);
        this.getProfitChartData(value);
    }
    changeTab(selectedTab) {
        if (selectedTab.tabTitle === 'Profit') {
            this.profitChart.resizeChart();
        }
        else {
            this.ordersChart.resizeChart();
        }
    }
    getOrdersChartData(period) {
        this.ordersProfitChartService.getOrdersChartData(period)
            .pipe(takeWhile(() => this.alive))
            .subscribe(ordersChartData => {
            this.ordersChartData = ordersChartData;
        });
    }
    getProfitChartData(period) {
        this.ordersProfitChartService.getProfitChartData(period)
            .pipe(takeWhile(() => this.alive))
            .subscribe(profitChartData => {
            this.profitChartData = profitChartData;
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    ViewChild('ordersChart', { static: true }),
    __metadata("design:type", OrdersChartComponent)
], ECommerceChartsPanelComponent.prototype, "ordersChart", void 0);
__decorate([
    ViewChild('profitChart', { static: true }),
    __metadata("design:type", ProfitChartComponent)
], ECommerceChartsPanelComponent.prototype, "profitChart", void 0);
ECommerceChartsPanelComponent = __decorate([
    Component({
        selector: 'ngx-ecommerce-charts',
        styleUrls: ['./charts-panel.component.scss'],
        templateUrl: './charts-panel.component.html',
    }),
    __metadata("design:paramtypes", [OrdersProfitChartData])
], ECommerceChartsPanelComponent);
export { ECommerceChartsPanelComponent };
//# sourceMappingURL=charts-panel.component.js.map