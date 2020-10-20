import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
let AnalyticsService = class AnalyticsService {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    trackPageViews() {
        if (this.enabled) {
            this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
                .subscribe(() => {
                ga('send', { hitType: 'pageview', page: this.location.path() });
            });
        }
    }
    trackEvent(eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    }
};
AnalyticsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Location, Router])
], AnalyticsService);
export { AnalyticsService };
//# sourceMappingURL=analytics.service.js.map