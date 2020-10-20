import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
let ChartjsRadarComponent = class ChartjsRadarComponent {
    constructor(theme) {
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
            const colors = config.variables;
            const chartjs = config.variables.chartjs;
            this.data = {
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                datasets: [{
                        data: [65, 59, 90, 81, 56, 55, 40],
                        label: 'Series A',
                        borderColor: colors.danger,
                        backgroundColor: NbColorHelper.hexToRgbA(colors.dangerLight, 0.5),
                    }, {
                        data: [28, 48, 40, 19, 96, 27, 100],
                        label: 'Series B',
                        borderColor: colors.warning,
                        backgroundColor: NbColorHelper.hexToRgbA(colors.warningLight, 0.5),
                    }],
            };
            this.options = {
                responsive: true,
                maintainAspectRatio: false,
                scaleFontColor: 'white',
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                scale: {
                    pointLabels: {
                        fontSize: 14,
                        fontColor: chartjs.textColor,
                    },
                    gridLines: {
                        color: chartjs.axisLineColor,
                    },
                    angleLines: {
                        color: chartjs.axisLineColor,
                    },
                },
            };
        });
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
};
ChartjsRadarComponent = __decorate([
    Component({
        selector: 'ngx-chartjs-radar',
        template: `
    <chart type="radar" [data]="data" [options]="options"></chart>
  `,
    }),
    __metadata("design:paramtypes", [NbThemeService])
], ChartjsRadarComponent);
export { ChartjsRadarComponent };
//# sourceMappingURL=chartjs-radar.component.js.map