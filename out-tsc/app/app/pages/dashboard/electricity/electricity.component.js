import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ElectricityData } from '../../../@core/data/electricity';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
let ElectricityComponent = class ElectricityComponent {
    constructor(electricityService, themeService) {
        this.electricityService = electricityService;
        this.themeService = themeService;
        this.alive = true;
        this.type = 'week';
        this.types = ['week', 'month', 'year'];
        this.themeService.getJsTheme()
            .pipe(takeWhile(() => this.alive))
            .subscribe(theme => {
            this.currentTheme = theme.name;
        });
        forkJoin(this.electricityService.getListData(), this.electricityService.getChartData())
            .pipe(takeWhile(() => this.alive))
            .subscribe(([listData, chartData]) => {
            this.listData = listData;
            this.chartData = chartData;
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
ElectricityComponent = __decorate([
    Component({
        selector: 'ngx-electricity',
        styleUrls: ['./electricity.component.scss'],
        templateUrl: './electricity.component.html',
    }),
    __metadata("design:paramtypes", [ElectricityData,
        NbThemeService])
], ElectricityComponent);
export { ElectricityComponent };
//# sourceMappingURL=electricity.component.js.map