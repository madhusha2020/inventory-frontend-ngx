import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
let TrafficCardsHeaderComponent = class TrafficCardsHeaderComponent {
    constructor(themeService) {
        this.themeService = themeService;
        this.alive = true;
        this.periodChange = new EventEmitter();
        this.type = 'week';
        this.types = ['week', 'month', 'year'];
        this.themeService.getJsTheme()
            .pipe(takeWhile(() => this.alive))
            .subscribe(theme => {
            this.currentTheme = theme.name;
        });
    }
    changePeriod(period) {
        this.type = period;
        this.periodChange.emit(period);
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], TrafficCardsHeaderComponent.prototype, "periodChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TrafficCardsHeaderComponent.prototype, "type", void 0);
TrafficCardsHeaderComponent = __decorate([
    Component({
        selector: 'ngx-traffic-cards-header',
        styleUrls: ['./traffic-cards-header.component.scss'],
        templateUrl: './traffic-cards-header.component.html',
    }),
    __metadata("design:paramtypes", [NbThemeService])
], TrafficCardsHeaderComponent);
export { TrafficCardsHeaderComponent };
//# sourceMappingURL=traffic-cards-header.component.js.map