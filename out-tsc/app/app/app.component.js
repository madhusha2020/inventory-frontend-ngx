import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
let AppComponent = class AppComponent {
    constructor(analytics, seoService) {
        this.analytics = analytics;
        this.seoService = seoService;
    }
    ngOnInit() {
        this.analytics.trackPageViews();
        this.seoService.trackCanonicalChanges();
    }
};
AppComponent = __decorate([
    Component({
        selector: 'ngx-app',
        template: '<router-outlet></router-outlet>',
    }),
    __metadata("design:paramtypes", [AnalyticsService, SeoService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map