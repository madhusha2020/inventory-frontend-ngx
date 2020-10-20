import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { UserActivityData } from '../../../@core/data/user-activity';
let ECommerceUserActivityComponent = class ECommerceUserActivityComponent {
    constructor(themeService, userActivityService) {
        this.themeService = themeService;
        this.userActivityService = userActivityService;
        this.alive = true;
        this.userActivity = [];
        this.type = 'month';
        this.types = ['week', 'month', 'year'];
        this.themeService.getJsTheme()
            .pipe(takeWhile(() => this.alive))
            .subscribe(theme => {
            this.currentTheme = theme.name;
        });
        this.getUserActivity(this.type);
    }
    getUserActivity(period) {
        this.userActivityService.getUserActivityData(period)
            .pipe(takeWhile(() => this.alive))
            .subscribe(userActivityData => {
            this.userActivity = userActivityData;
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
ECommerceUserActivityComponent = __decorate([
    Component({
        selector: 'ngx-user-activity',
        styleUrls: ['./user-activity.component.scss'],
        templateUrl: './user-activity.component.html',
    }),
    __metadata("design:paramtypes", [NbThemeService,
        UserActivityData])
], ECommerceUserActivityComponent);
export { ECommerceUserActivityComponent };
//# sourceMappingURL=user-activity.component.js.map