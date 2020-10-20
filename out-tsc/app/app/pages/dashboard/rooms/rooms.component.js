import { __decorate, __metadata } from "tslib";
import { Component, HostBinding } from '@angular/core';
import { NbThemeService, NbMediaBreakpointsService } from '@nebular/theme';
import { map } from 'rxjs/operators';
let RoomsComponent = class RoomsComponent {
    constructor(themeService, breakpointService) {
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.breakpoints = this.breakpointService.getBreakpointsMap();
        this.themeSubscription = this.themeService.onMediaQueryChange()
            .subscribe(([, newValue]) => {
            this.breakpoint = newValue;
        });
        this.themeChangeSubscription = this.themeService.onThemeChange()
            .pipe(map(({ name }) => name === 'cosmic' || name === 'dark'))
            .subscribe((isDark) => this.isDarkTheme = isDark);
    }
    select(roomNumber) {
        if (this.isSelected(roomNumber)) {
            this.expand();
        }
        else {
            this.collapse();
        }
        this.selected = roomNumber;
    }
    expand() {
        this.expanded = true;
    }
    collapse() {
        this.expanded = false;
    }
    isCollapsed() {
        return !this.expanded;
    }
    isSelected(roomNumber) {
        return this.selected === roomNumber;
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
        this.themeChangeSubscription.unsubscribe();
    }
};
__decorate([
    HostBinding('class.expanded'),
    __metadata("design:type", Boolean)
], RoomsComponent.prototype, "expanded", void 0);
RoomsComponent = __decorate([
    Component({
        selector: 'ngx-rooms',
        styleUrls: ['./rooms.component.scss'],
        template: `
    <nb-card [size]="breakpoint.width >= breakpoints.sm ? 'giant' : ''">
      <nb-icon icon="arrow-ios-downward" pack="eva"
               (click)="collapse()"
               class="collapse"
               [hidden]="isCollapsed()">
      </nb-icon>
      <ngx-room-selector [class.dark-background]="isDarkTheme" (select)="select($event)"></ngx-room-selector>
      <ngx-player [collapsed]="isCollapsed() && breakpoint.width <= breakpoints.md"></ngx-player>
    </nb-card>
  `,
    }),
    __metadata("design:paramtypes", [NbThemeService,
        NbMediaBreakpointsService])
], RoomsComponent);
export { RoomsComponent };
//# sourceMappingURL=rooms.component.js.map