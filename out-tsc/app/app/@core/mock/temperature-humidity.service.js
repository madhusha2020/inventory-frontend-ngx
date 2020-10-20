import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { TemperatureHumidityData } from '../data/temperature-humidity';
let TemperatureHumidityService = class TemperatureHumidityService extends TemperatureHumidityData {
    constructor() {
        super(...arguments);
        this.temperatureDate = {
            value: 24,
            min: 12,
            max: 30,
        };
        this.humidityDate = {
            value: 87,
            min: 0,
            max: 100,
        };
    }
    getTemperatureData() {
        return observableOf(this.temperatureDate);
    }
    getHumidityData() {
        return observableOf(this.humidityDate);
    }
};
TemperatureHumidityService = __decorate([
    Injectable()
], TemperatureHumidityService);
export { TemperatureHumidityService };
//# sourceMappingURL=temperature-humidity.service.js.map