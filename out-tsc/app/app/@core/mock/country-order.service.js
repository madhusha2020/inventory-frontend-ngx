import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { CountryOrderData } from '../data/country-order';
let CountryOrderService = class CountryOrderService extends CountryOrderData {
    constructor() {
        super(...arguments);
        this.countriesCategories = [
            'Sofas',
            'Furniture',
            'Lighting',
            'Tables',
            'Textiles',
        ];
        this.countriesCategoriesLength = this.countriesCategories.length;
    }
    generateRandomData(nPoints) {
        return Array.from(Array(nPoints)).map(() => {
            return Math.round(Math.random() * 20);
        });
    }
    getCountriesCategories() {
        return observableOf(this.countriesCategories);
    }
    getCountriesCategoriesData(country) {
        return observableOf(this.generateRandomData(this.countriesCategoriesLength));
    }
};
CountryOrderService = __decorate([
    Injectable()
], CountryOrderService);
export { CountryOrderService };
//# sourceMappingURL=country-order.service.js.map