import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
let KittenComponent = class KittenComponent {
    constructor(themeService) {
        this.themeService = themeService;
        this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
            this.currentTheme = theme.name;
        });
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
};
KittenComponent = __decorate([
    Component({
        selector: 'ngx-kitten',
        styleUrls: ['./kitten.component.scss'],
        templateUrl: './kitten.component.html',
    }),
    __metadata("design:paramtypes", [NbThemeService])
], KittenComponent);
export { KittenComponent };
//# sourceMappingURL=kitten.component.js.map