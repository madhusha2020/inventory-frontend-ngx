import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { LayoutService } from '../../../../@core/utils/layout.service';
let ProfitChartComponent = class ProfitChartComponent {
    constructor(theme, layoutService) {
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.options = {};
        this.layoutService.onSafeChangeLayoutSize()
            .pipe(takeWhile(() => this.alive))
            .subscribe(() => this.resizeChart());
    }
    ngOnChanges() {
        if (this.echartsIntance) {
            this.updateProfitChartOptions(this.profitChartData);
        }
    }
    ngAfterViewInit() {
        this.theme.getJsTheme()
            .pipe(takeWhile(() => this.alive))
            .subscribe(config => {
            const eTheme = config.variables.profit;
            this.setOptions(eTheme);
        });
    }
    setOptions(eTheme) {
        this.options = {
            backgroundColor: eTheme.bg,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    shadowStyle: {
                        color: 'rgba(0, 0, 0, 0.3)',
                    },
                },
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis: [
                {
                    type: 'category',
                    data: this.profitChartData.chartLabel,
                    axisTick: {
                        alignWithLabel: true,
                    },
                    axisLine: {
                        lineStyle: {
                            color: eTheme.axisLineColor,
                        },
                    },
                    axisLabel: {
                        color: eTheme.axisTextColor,
                        fontSize: eTheme.axisFontSize,
                    },
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: eTheme.axisLineColor,
                        },
                    },
                    splitLine: {
                        lineStyle: {
                            color: eTheme.splitLineColor,
                        },
                    },
                    axisLabel: {
                        color: eTheme.axisTextColor,
                        fontSize: eTheme.axisFontSize,
                    },
                },
            ],
            series: [
                {
                    name: 'Canceled',
                    type: 'bar',
                    barGap: 0,
                    barWidth: '20%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: eTheme.firstLineGradFrom,
                                }, {
                                    offset: 1,
                                    color: eTheme.firstLineGradTo,
                                }]),
                        },
                    },
                    data: this.profitChartData.data[0],
                },
                {
                    name: 'Payment',
                    type: 'bar',
                    barWidth: '20%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: eTheme.secondLineGradFrom,
                                }, {
                                    offset: 1,
                                    color: eTheme.secondLineGradTo,
                                }]),
                        },
                    },
                    data: this.profitChartData.data[1],
                },
                {
                    name: 'All orders',
                    type: 'bar',
                    barWidth: '20%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: eTheme.thirdLineGradFrom,
                                }, {
                                    offset: 1,
                                    color: eTheme.thirdLineGradTo,
                                }]),
                        },
                    },
                    data: this.profitChartData.data[2],
                },
            ],
        };
    }
    updateProfitChartOptions(profitChartData) {
        const options = this.options;
        const series = this.getNewSeries(options.series, profitChartData.data);
        this.echartsIntance.setOption({
            series: series,
            xAxis: {
                data: this.profitChartData.chartLabel,
            },
        });
    }
    getNewSeries(series, data) {
        return series.map((line, index) => {
            return Object.assign(Object.assign({}, line), { data: data[index] });
        });
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
], ProfitChartComponent.prototype, "profitChartData", void 0);
ProfitChartComponent = __decorate([
    Component({
        selector: 'ngx-profit-chart',
        styleUrls: ['./charts-common.component.scss'],
        template: `
    <div echarts [options]="options" class="echart" (chartInit)="onChartInit($event)"></div>
  `,
    }),
    __metadata("design:paramtypes", [NbThemeService,
        LayoutService])
], ProfitChartComponent);
export { ProfitChartComponent };
//# sourceMappingURL=profit-chart.component.js.map