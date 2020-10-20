import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { LayoutService } from '../../../../@core/utils/layout.service';
let CountryOrdersChartComponent = class CountryOrdersChartComponent {
    constructor(theme, layoutService) {
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.option = {};
        this.layoutService.onSafeChangeLayoutSize()
            .pipe(takeWhile(() => this.alive))
            .subscribe(() => this.resizeChart());
    }
    ngOnChanges(changes) {
        if (changes.data && !changes.data.isFirstChange()) {
            this.echartsInstance.setOption({
                series: [
                    {
                        data: this.data.map(v => this.maxValue),
                    },
                    {
                        data: this.data,
                    },
                    {
                        data: this.data,
                    },
                ],
            });
        }
    }
    ngAfterViewInit() {
        this.theme.getJsTheme()
            .pipe(takeWhile(() => this.alive))
            .subscribe(config => {
            const countriesTheme = config.variables.countryOrders;
            this.option = Object.assign({}, {
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    top: '3%',
                    containLabel: true,
                },
                xAxis: {
                    axisLabel: {
                        color: countriesTheme.chartAxisTextColor,
                        fontSize: countriesTheme.chartAxisFontSize,
                    },
                    axisLine: {
                        lineStyle: {
                            color: countriesTheme.chartAxisLineColor,
                            width: '2',
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        lineStyle: {
                            color: countriesTheme.chartAxisSplitLine,
                            width: '1',
                        },
                    },
                },
                yAxis: {
                    data: this.labels,
                    axisLabel: {
                        color: countriesTheme.chartAxisTextColor,
                        fontSize: countriesTheme.chartAxisFontSize,
                    },
                    axisLine: {
                        lineStyle: {
                            color: countriesTheme.chartAxisLineColor,
                            width: '2',
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                },
                series: [
                    {
                        type: 'bar',
                        data: this.data.map(v => this.maxValue),
                        cursor: 'default',
                        itemStyle: {
                            normal: {
                                color: countriesTheme.chartInnerLineColor,
                            },
                            opacity: 1,
                        },
                        barWidth: '40%',
                        barGap: '-100%',
                        barCategoryGap: '30%',
                        animation: false,
                        z: 1,
                    },
                    {
                        type: 'bar',
                        data: this.data,
                        cursor: 'default',
                        itemStyle: {
                            normal: {
                                color: countriesTheme.chartLineBottomShadowColor,
                            },
                            opacity: 1,
                        },
                        barWidth: '40%',
                        barGap: '-100%',
                        barCategoryGap: '30%',
                        z: 2,
                    },
                    {
                        type: 'bar',
                        barWidth: '35%',
                        data: this.data,
                        cursor: 'default',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                        offset: 0,
                                        color: countriesTheme.chartGradientFrom,
                                    }, {
                                        offset: 1,
                                        color: countriesTheme.chartGradientTo,
                                    }]),
                            },
                        },
                        z: 3,
                    },
                ],
            });
        });
    }
    onChartInit(ec) {
        this.echartsInstance = ec;
    }
    resizeChart() {
        if (this.echartsInstance) {
            this.echartsInstance.resize();
        }
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], CountryOrdersChartComponent.prototype, "countryName", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CountryOrdersChartComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CountryOrdersChartComponent.prototype, "maxValue", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], CountryOrdersChartComponent.prototype, "labels", void 0);
CountryOrdersChartComponent = __decorate([
    Component({
        selector: 'ngx-country-orders-chart',
        styleUrls: ['./country-orders-chart.component.scss'],
        template: `
    <div class="header">
      <span class="caption">Selected Country/Region</span>
      <h2 class="h4">{{ countryName }}</h2>
    </div>
    <div echarts
         [options]="option"
         class="echart"
         (chartInit)="onChartInit($event)">
    </div>
  `,
    }),
    __metadata("design:paramtypes", [NbThemeService,
        LayoutService])
], CountryOrdersChartComponent);
export { CountryOrdersChartComponent };
//# sourceMappingURL=country-orders-chart.component.js.map