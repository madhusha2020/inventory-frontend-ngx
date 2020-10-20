import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { SolarData } from '../../@core/data/solar';
let DashboardComponent = class DashboardComponent {
    constructor(themeService, solarService) {
        this.themeService = themeService;
        this.solarService = solarService;
        this.alive = true;
        this.lightCard = {
            title: 'Light',
            iconClass: 'nb-lightbulb',
            type: 'primary',
        };
        this.rollerShadesCard = {
            title: 'Roller Shades',
            iconClass: 'nb-roller-shades',
            type: 'success',
        };
        this.wirelessAudioCard = {
            title: 'Wireless Audio',
            iconClass: 'nb-audio',
            type: 'info',
        };
        this.coffeeMakerCard = {
            title: 'Coffee Maker',
            iconClass: 'nb-coffee-maker',
            type: 'warning',
        };
        this.commonStatusCardsSet = [
            this.lightCard,
            this.rollerShadesCard,
            this.wirelessAudioCard,
            this.coffeeMakerCard,
        ];
        this.statusCardsByThemes = {
            default: this.commonStatusCardsSet,
            cosmic: this.commonStatusCardsSet,
            corporate: [
                Object.assign(Object.assign({}, this.lightCard), { type: 'warning' }),
                Object.assign(Object.assign({}, this.rollerShadesCard), { type: 'primary' }),
                Object.assign(Object.assign({}, this.wirelessAudioCard), { type: 'danger' }),
                Object.assign(Object.assign({}, this.coffeeMakerCard), { type: 'info' }),
            ],
            dark: this.commonStatusCardsSet,
        };
        this.themeService.getJsTheme()
            .pipe(takeWhile(() => this.alive))
            .subscribe(theme => {
            this.statusCards = this.statusCardsByThemes[theme.name];
        });
        this.solarService.getSolarData()
            .pipe(takeWhile(() => this.alive))
            .subscribe((data) => {
            this.solarValue = data;
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'ngx-dashboard',
        styleUrls: ['./dashboard.component.scss'],
        templateUrl: './dashboard.component.html',
    }),
    __metadata("design:paramtypes", [NbThemeService,
        SolarData])
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map