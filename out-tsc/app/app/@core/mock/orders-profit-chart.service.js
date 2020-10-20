import { __decorate, __metadata } from "tslib";
import { of as observableOf } from 'rxjs';
import { Injectable } from '@angular/core';
import { OrdersChartData } from '../data/orders-chart';
import { OrdersProfitChartData } from '../data/orders-profit-chart';
import { ProfitChartData } from '../data/profit-chart';
let OrdersProfitChartService = class OrdersProfitChartService extends OrdersProfitChartData {
    constructor(ordersChartService, profitChartService) {
        super();
        this.ordersChartService = ordersChartService;
        this.profitChartService = profitChartService;
        this.summary = [
            {
                title: 'Marketplace',
                value: 3654,
            },
            {
                title: 'Last Month',
                value: 946,
            },
            {
                title: 'Last Week',
                value: 654,
            },
            {
                title: 'Today',
                value: 230,
            },
        ];
    }
    getOrderProfitChartSummary() {
        return observableOf(this.summary);
    }
    getOrdersChartData(period) {
        return observableOf(this.ordersChartService.getOrdersChartData(period));
    }
    getProfitChartData(period) {
        return observableOf(this.profitChartService.getProfitChartData(period));
    }
};
OrdersProfitChartService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [OrdersChartData,
        ProfitChartData])
], OrdersProfitChartService);
export { OrdersProfitChartService };
//# sourceMappingURL=orders-profit-chart.service.js.map