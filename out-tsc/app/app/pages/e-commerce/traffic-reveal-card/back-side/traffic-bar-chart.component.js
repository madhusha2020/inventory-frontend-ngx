import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { LayoutService } from '../../../../@core/utils/layout.service';
let TrafficBarChartComponent = class TrafficBarChartComponent {
    constructor(theme, layoutService) {
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.option = {};
        this.layoutService.onSafeChangeLayoutSize()
            .pipe(takeWhile(() => this.alive))
            .subscribe(() => this.resizeChart());
    }
    onChartInit(ec) {
        this.echartsInstance = ec;
    }
    resizeChart() {
        if (this.echartsInstance) {
            this.echartsInstance.resize();
        }
    }
    ngOnChanges(changes) {
        if (!changes.data.isFirstChange() && !changes.labels.isFirstChange()) {
            this.echartsInstance.setOption({
                series: [{
                        data: this.data,
                    }],
                xAxis: {
                    data: this.labels,
                },
                tooltip: {
                    formatter: this.formatter,
                },
            });
        }
    }
    ngAfterViewInit() {
        this.theme.getJsTheme()
            .pipe(takeWhile(() => this.alive))
            .subscribe(config => {
            const trafficTheme = config.variables.trafficBarEchart;
            this.option = Object.assign({}, {
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    containLabel: true,
                },
                xAxis: {
                    type: 'category',
                    data: this.labels,
                    axisLabel: {
                        color: trafficTheme.axisTextColor,
                        fontSize: trafficTheme.axisFontSize,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                },
                yAxis: {
                    show: false,
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    boundaryGap: [0, '5%'],
                },
                tooltip: {
                    axisPointer: {
                        type: 'shadow',
                    },
                    textStyle: {
                        color: trafficTheme.tooltipTextColor,
                        fontWeight: trafficTheme.tooltipFontWeight,
                        fontSize: 16,
                    },
                    position: 'top',
                    backgroundColor: trafficTheme.tooltipBg,
                    borderColor: trafficTheme.tooltipBorderColor,
                    borderWidth: 1,
                    formatter: this.formatter,
                    extraCssText: trafficTheme.tooltipExtraCss,
                },
                series: [
                    {
                        type: 'bar',
                        barWidth: '40%',
                        data: this.data,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: trafficTheme.gradientFrom,
                                    }, {
                                        offset: 1,
                                        color: trafficTheme.gradientTo,
                                    }]),
                                opacity: 1,
                                shadowColor: trafficTheme.gradientFrom,
                                shadowBlur: trafficTheme.shadowBlur,
                            },
                        },
                    },
                ],
            });
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], TrafficBarChartComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], TrafficBarChartComponent.prototype, "labels", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TrafficBarChartComponent.prototype, "formatter", void 0);
TrafficBarChartComponent = __decorate([
    Component({
        selector: 'ngx-traffic-bar-chart',
        template: `
    <div echarts
         [options]="option"
         class="echart"
         (chartInit)="onChartInit($event)">
    </div>
  `,
    }),
    __metadata("design:paramtypes", [NbThemeService,
        LayoutService])
], TrafficBarChartComponent);
export { TrafficBarChartComponent };
//# sourceMappingURL=traffic-bar-chart.component.js.map