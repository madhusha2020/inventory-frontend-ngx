import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NbMediaBreakpointsService, NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { CountryOrderData } from '../../../@core/data/country-order';
let CountryOrdersComponent = class CountryOrdersComponent {
    constructor(themeService, breakpointService, countryOrderService) {
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.countryOrderService = countryOrderService;
        this.alive = true;
        this.countryName = '';
        this.countryData = [];
        this.breakpoint = { name: '', width: 0 };
        this.breakpoints = this.breakpointService.getBreakpointsMap();
    }
    ngOnInit() {
        this.themeService.onMediaQueryChange()
            .pipe(takeWhile(() => this.alive))
            .subscribe(([oldValue, newValue]) => {
            this.breakpoint = newValue;
        });
        this.countryOrderService.getCountriesCategories()
            .pipe(takeWhile(() => this.alive))
            .subscribe((countriesCategories) => {
            this.countriesCategories = countriesCategories;
        });
    }
    selectCountryById(countryName) {
        this.countryName = countryName;
        this.countryOrderService.getCountriesCategoriesData(countryName)
            .pipe(takeWhile(() => this.alive))
            .subscribe((countryData) => {
            this.countryData = countryData;
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
CountryOrdersComponent = __decorate([
    Component({
        selector: 'ngx-country-orders',
        styleUrls: ['./country-orders.component.scss'],
        template: `
    <nb-card [size]="breakpoint.width >= breakpoints.md ? 'medium' : 'giant'">
      <nb-card-header>Country Orders Statistics</nb-card-header>
      <nb-card-body>
        <ngx-country-orders-map (select)="selectCountryById($event)"
                                countryId="USA">
        </ngx-country-orders-map>
        <ngx-country-orders-chart [countryName]="countryName"
                                  [data]="countryData"
                                  [labels]="countriesCategories"
                                  maxValue="20">
        </ngx-country-orders-chart>
      </nb-card-body>
    </nb-card>
  `,
    }),
    __metadata("design:paramtypes", [NbThemeService,
        NbMediaBreakpointsService,
        CountryOrderData])
], CountryOrdersComponent);
export { CountryOrdersComponent };
//# sourceMappingURL=country-orders.component.js.map