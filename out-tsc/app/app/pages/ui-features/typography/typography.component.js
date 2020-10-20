import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NbThemeService, NbMediaBreakpointsService } from '@nebular/theme';
let TypographyComponent = class TypographyComponent {
    constructor(themeService, breakpointService) {
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.breakpoints = this.breakpointService.getBreakpointsMap();
        this.themeSubscription = this.themeService.onMediaQueryChange()
            .subscribe(([oldValue, newValue]) => {
            this.breakpoint = newValue;
        });
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
};
TypographyComponent = __decorate([
    Component({
        selector: 'ngx-typography',
        styleUrls: ['./typography.component.scss'],
        templateUrl: './typography.component.html',
    }),
    __metadata("design:paramtypes", [NbThemeService,
        NbMediaBreakpointsService])
], TypographyComponent);
export { TypographyComponent };
//# sourceMappingURL=typography.component.js.map