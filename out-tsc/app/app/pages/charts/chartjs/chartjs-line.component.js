import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
let ChartjsLineComponent = class ChartjsLineComponent {
    constructor(theme) {
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
            const colors = config.variables;
            const chartjs = config.variables.chartjs;
            this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                        data: [65, 59, 80, 81, 56, 55, 40],
                        label: 'Series A',
                        backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
                        borderColor: colors.primary,
                    }, {
                        data: [28, 48, 40, 19, 86, 27, 90],
                        label: 'Series B',
                        backgroundColor: NbColorHelper.hexToRgbA(colors.danger, 0.3),
                        borderColor: colors.danger,
                    }, {
                        data: [18, 48, 77, 9, 100, 27, 40],
                        label: 'Series C',
                        backgroundColor: NbColorHelper.hexToRgbA(colors.info, 0.3),
                        borderColor: colors.info,
                    },
                ],
            };
            this.options = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
};
ChartjsLineComponent = __decorate([
    Component({
        selector: 'ngx-chartjs-line',
        template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
    }),
    __metadata("design:paramtypes", [NbThemeService])
], ChartjsLineComponent);
export { ChartjsLineComponent };
//# sourceMappingURL=chartjs-line.component.js.map