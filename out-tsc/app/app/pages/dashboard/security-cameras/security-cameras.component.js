import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbMediaBreakpointsService, NbThemeService } from '@nebular/theme';
import { SecurityCamerasData } from '../../../@core/data/security-cameras';
let SecurityCamerasComponent = class SecurityCamerasComponent {
    constructor(themeService, breakpointService, securityCamerasService) {
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.securityCamerasService = securityCamerasService;
        this.destroy$ = new Subject();
        this.isSingleView = false;
        this.actionSize = 'medium';
    }
    ngOnInit() {
        this.securityCamerasService.getCamerasData()
            .pipe(takeUntil(this.destroy$))
            .subscribe((cameras) => {
            this.cameras = cameras;
            this.selectedCamera = this.cameras[0];
        });
        const breakpoints = this.breakpointService.getBreakpointsMap();
        this.themeService.onMediaQueryChange()
            .pipe(map(([, breakpoint]) => breakpoint.width))
            .subscribe((width) => {
            this.actionSize = width > breakpoints.md ? 'medium' : 'small';
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    selectCamera(camera) {
        this.selectedCamera = camera;
        this.isSingleView = true;
    }
};
SecurityCamerasComponent = __decorate([
    Component({
        selector: 'ngx-security-cameras',
        styleUrls: ['./security-cameras.component.scss'],
        templateUrl: './security-cameras.component.html',
    }),
    __metadata("design:paramtypes", [NbThemeService,
        NbMediaBreakpointsService,
        SecurityCamerasData])
], SecurityCamerasComponent);
export { SecurityCamerasComponent };
//# sourceMappingURL=security-cameras.component.js.map