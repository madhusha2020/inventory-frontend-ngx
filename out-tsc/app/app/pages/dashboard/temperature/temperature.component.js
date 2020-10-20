import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { TemperatureHumidityData } from '../../../@core/data/temperature-humidity';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
let TemperatureComponent = class TemperatureComponent {
    constructor(themeService, temperatureHumidityService) {
        this.themeService = themeService;
        this.temperatureHumidityService = temperatureHumidityService;
        this.alive = true;
        this.temperatureOff = false;
        this.temperatureMode = 'cool';
        this.humidityOff = false;
        this.humidityMode = 'heat';
        this.themeService.getJsTheme()
            .pipe(takeWhile(() => this.alive))
            .subscribe(config => {
            this.theme = config.variables.temperature;
        });
        forkJoin(this.temperatureHumidityService.getTemperatureData(), this.temperatureHumidityService.getHumidityData())
            .subscribe(([temperatureData, humidityData]) => {
            this.temperatureData = temperatureData;
            this.temperature = this.temperatureData.value;
            this.humidityData = humidityData;
            this.humidity = this.humidityData.value;
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
TemperatureComponent = __decorate([
    Component({
        selector: 'ngx-temperature',
        styleUrls: ['./temperature.component.scss'],
        templateUrl: './temperature.component.html',
    }),
    __metadata("design:paramtypes", [NbThemeService,
        TemperatureHumidityData])
], TemperatureComponent);
export { TemperatureComponent };
//# sourceMappingURL=temperature.component.js.map