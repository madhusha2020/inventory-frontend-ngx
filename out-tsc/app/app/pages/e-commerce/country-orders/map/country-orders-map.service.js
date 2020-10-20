import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let CountryOrdersMapService = class CountryOrdersMapService {
    constructor(http) {
        this.http = http;
    }
    getCords() {
        return this.http.get('assets/leaflet-countries/countries.geo.json');
    }
};
CountryOrdersMapService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], CountryOrdersMapService);
export { CountryOrdersMapService };
//# sourceMappingURL=country-orders-map.service.js.map