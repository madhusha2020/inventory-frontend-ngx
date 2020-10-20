import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { LayoutService } from '../../../../@core/utils/layout.service';
let StatsBarAnimationChartComponent = class StatsBarAnimationChartComponent {
    constructor(theme, layoutService) {
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.linesData = {
            firstLine: [],
            secondLine: [],
        };
        this.options = {};
        this.layoutService.onSafeChangeLayoutSize()
            .pipe(takeWhile(() => this.alive))
            .subscribe(() => this.resizeChart());
    }
    ngAfterViewInit() {
        this.theme.getJsTheme()
            .pipe(takeWhile(() => this.alive))
            .subscribe(config => {
            const profitBarAnimationEchart = config.variables.profitBarAnimationEchart;
            this.setChartOption(profitBarAnimationEchart);
        });
    }
    setChartOption(chartVariables) {
        this.options = {
            color: [
                chartVariables.firstAnimationBarColor,
                chartVariables.secondAnimationBarColor,
            ],
            grid: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
            },
            legend: {
                data: ['transactions', 'orders'],
                borderWidth: 0,
                borderRadius: 0,
                itemWidth: 15,
                itemHeight: 15,
                textStyle: {
                    color: chartVariables.textColor,
                },
            },
            tooltip: {
                axisPointer: {
                    type: 'shadow',
                },
                textStyle: {
                    color: chartVariables.tooltipTextColor,
                    fontWeight: chartVariables.tooltipFontWeight,
                    fontSize: chartVariables.tooltipFontSize,
                },
                position: 'top',
                backgroundColor: chartVariables.tooltipBg,
                borderColor: chartVariables.tooltipBorderColor,
                borderWidth: chartVariables.tooltipBorderWidth,
                formatter: params => `$ ${Math.round(parseInt(params.value, 10))}`,
                extraCssText: chartVariables.tooltipExtraCss,
            },
            xAxis: [
                {
                    data: this.linesData.firstLine.map((_, index) => index),
                    silent: false,
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                },
            ],
            yAxis: [
                {
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: chartVariables.splitLineStyleColor,
                            opacity: chartVariables.splitLineStyleOpacity,
                            width: chartVariables.splitLineStyleWidth,
                        },
                    },
                },
            ],
            series: [
                {
                    name: 'transactions',
                    type: 'bar',
                    data: this.linesData.firstLine,
                    animationDelay: idx => idx * 10,
                },
                {
                    name: 'orders',
                    type: 'bar',
                    data: this.linesData.secondLine,
                    animationDelay: idx => idx * 10 + 100,
                },
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: idx => idx * 5,
        };
    }
    onChartInit(echarts) {
        this.echartsIntance = echarts;
    }
    resizeChart() {
        if (this.echartsIntance) {
            this.echartsIntance.resize();
        }
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], StatsBarAnimationChartComponent.prototype, "linesData", void 0);
StatsBarAnimationChartComponent = __decorate([
    Component({
        selector: 'ngx-stats-bar-animation-chart',
        template: `
    <div echarts
         [options]="options"
         class="echart"
         (chartInit)="onChartInit($event)">
    </div>
  `,
    }),
    __metadata("design:paramtypes", [NbThemeService,
        LayoutService])
], StatsBarAnimationChartComponent);
export { StatsBarAnimationChartComponent };
//# sourceMappingURL=stats-bar-animation-chart.component.js.map