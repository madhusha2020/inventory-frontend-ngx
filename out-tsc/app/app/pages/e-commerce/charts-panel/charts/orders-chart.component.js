import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { delay, takeWhile } from 'rxjs/operators';
import { LayoutService } from '../../../../@core/utils/layout.service';
let OrdersChartComponent = class OrdersChartComponent {
    constructor(theme, layoutService) {
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.layoutService.onSafeChangeLayoutSize()
            .pipe(takeWhile(() => this.alive))
            .subscribe(() => this.resizeChart());
    }
    ngOnChanges() {
        if (this.option) {
            this.updateOrdersChartOptions(this.ordersChartData);
        }
    }
    ngAfterViewInit() {
        this.theme.getJsTheme()
            .pipe(takeWhile(() => this.alive), delay(1))
            .subscribe(config => {
            const eTheme = config.variables.orders;
            this.setOptions(eTheme);
            this.updateOrdersChartOptions(this.ordersChartData);
        });
    }
    setOptions(eTheme) {
        this.option = {
            grid: {
                left: 40,
                top: 20,
                right: 0,
                bottom: 40,
            },
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        color: eTheme.tooltipLineColor,
                        width: eTheme.tooltipLineWidth,
                    },
                },
                textStyle: {
                    color: eTheme.tooltipTextColor,
                    fontSize: eTheme.tooltipFontSize,
                    fontWeight: eTheme.tooltipFontWeight,
                },
                position: 'top',
                backgroundColor: eTheme.tooltipBg,
                borderColor: eTheme.tooltipBorderColor,
                borderWidth: 1,
                formatter: (params) => {
                    return Math.round(parseInt(params.value, 10));
                },
                extraCssText: eTheme.tooltipExtraCss,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                offset: 5,
                data: [],
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    color: eTheme.axisTextColor,
                    fontSize: eTheme.axisFontSize,
                },
                axisLine: {
                    lineStyle: {
                        color: eTheme.axisLineColor,
                        width: '2',
                    },
                },
            },
            yAxis: {
                type: 'value',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: eTheme.axisLineColor,
                        width: '1',
                    },
                },
                axisLabel: {
                    color: eTheme.axisTextColor,
                    fontSize: eTheme.axisFontSize,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    lineStyle: {
                        color: eTheme.yAxisSplitLine,
                        width: '1',
                    },
                },
            },
            series: [
                this.getFirstLine(eTheme),
                this.getSecondLine(eTheme),
                this.getThirdLine(eTheme),
            ],
        };
    }
    getFirstLine(eTheme) {
        return {
            type: 'line',
            smooth: true,
            symbolSize: 20,
            itemStyle: {
                normal: {
                    opacity: 0,
                },
                emphasis: {
                    opacity: 0,
                },
            },
            lineStyle: {
                normal: {
                    width: 0,
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: eTheme.firstAreaGradFrom,
                        }, {
                            offset: 1,
                            color: eTheme.firstAreaGradTo,
                        }]),
                    opacity: 1,
                },
            },
            data: [],
        };
    }
    getSecondLine(eTheme) {
        return {
            type: 'line',
            smooth: true,
            symbolSize: 20,
            itemStyle: {
                normal: {
                    opacity: 0,
                },
                emphasis: {
                    color: '#ffffff',
                    borderColor: eTheme.itemBorderColor,
                    borderWidth: 2,
                    opacity: 1,
                },
            },
            lineStyle: {
                normal: {
                    width: eTheme.lineWidth,
                    type: eTheme.lineStyle,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: eTheme.secondLineGradFrom,
                        }, {
                            offset: 1,
                            color: eTheme.secondLineGradTo,
                        }]),
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: eTheme.secondAreaGradFrom,
                        }, {
                            offset: 1,
                            color: eTheme.secondAreaGradTo,
                        }]),
                },
            },
            data: [],
        };
    }
    getThirdLine(eTheme) {
        return {
            type: 'line',
            smooth: true,
            symbolSize: 20,
            itemStyle: {
                normal: {
                    opacity: 0,
                },
                emphasis: {
                    color: '#ffffff',
                    borderColor: eTheme.itemBorderColor,
                    borderWidth: 2,
                    opacity: 1,
                },
            },
            lineStyle: {
                normal: {
                    width: eTheme.lineWidth,
                    type: eTheme.lineStyle,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: eTheme.thirdLineGradFrom,
                        }, {
                            offset: 1,
                            color: eTheme.thirdLineGradTo,
                        }]),
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: eTheme.thirdAreaGradFrom,
                        }, {
                            offset: 1,
                            color: eTheme.thirdAreaGradTo,
                        }]),
                },
            },
            data: [],
        };
    }
    updateOrdersChartOptions(ordersChartData) {
        const options = this.option;
        const series = this.getNewSeries(options.series, ordersChartData.linesData);
        const xAxis = this.getNewXAxis(options.xAxis, ordersChartData.chartLabel);
        this.option = Object.assign(Object.assign({}, options), { xAxis,
            series });
    }
    getNewSeries(series, linesData) {
        return series.map((line, index) => {
            return Object.assign(Object.assign({}, line), { data: linesData[index] });
        });
    }
    getNewXAxis(xAxis, chartLabel) {
        return Object.assign(Object.assign({}, xAxis), { data: chartLabel });
    }
    onChartInit(echarts) {
        this.echartsIntance = echarts;
    }
    resizeChart() {
        if (this.echartsIntance) {
            // Fix recalculation chart size
            // TODO: investigate more deeply
            setTimeout(() => {
                this.echartsIntance.resize();
            }, 0);
        }
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], OrdersChartComponent.prototype, "ordersChartData", void 0);
OrdersChartComponent = __decorate([
    Component({
        selector: 'ngx-orders-chart',
        styleUrls: ['./charts-common.component.scss'],
        template: `
    <div echarts
         [options]="option"
         [merge]="option"
         class="echart"
         (chartInit)="onChartInit($event)">
    </div>
  `,
    }),
    __metadata("design:paramtypes", [NbThemeService,
        LayoutService])
], OrdersChartComponent);
export { OrdersChartComponent };
//# sourceMappingURL=orders-chart.component.js.map