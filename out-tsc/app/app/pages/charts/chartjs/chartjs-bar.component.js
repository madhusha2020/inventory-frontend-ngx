import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
let ChartjsBarComponent = class ChartjsBarComponent {
    constructor(theme) {
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
            const colors = config.variables;
            const chartjs = config.variables.chartjs;
            this.data = {
                labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
                datasets: [{
                        data: [65, 59, 80, 81, 56, 55, 40],
                        label: 'Series A',
                        backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
                    }, {
                        data: [28, 48, 40, 19, 86, 27, 90],
                        label: 'Series B',
                        backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
                    }],
            };
            this.options = {
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
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
            };
        });
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
};
ChartjsBarComponent = __decorate([
    Component({
        selector: 'ngx-chartjs-bar',
        template: `
    <chart type="bar" [data]="data" [options]="options"></chart>
  `,
    }),
    __metadata("design:paramtypes", [NbThemeService])
], ChartjsBarComponent);
export { ChartjsBarComponent };
//# sourceMappingURL=chartjs-bar.component.js.map