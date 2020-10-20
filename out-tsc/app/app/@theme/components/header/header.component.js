import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
let HeaderComponent = class HeaderComponent {
    constructor(sidebarService, menuService, themeService, userService, layoutService, breakpointService) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.userService = userService;
        this.layoutService = layoutService;
        this.breakpointService = breakpointService;
        this.userPictureOnly = false;
        this.themes = [
            {
                value: 'default',
                name: 'Light',
            },
            {
                value: 'dark',
                name: 'Dark',
            },
            {
                value: 'cosmic',
                name: 'Cosmic',
            },
            {
                value: 'corporate',
                name: 'Corporate',
            },
        ];
        this.currentTheme = 'default';
        this.userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        this.currentTheme = this.themeService.currentTheme;
        this.userService.getUsers()
            .pipe(takeUntil(this.destroy$))
            .subscribe((users) => this.user = users.nick);
        const { xl } = this.breakpointService.getBreakpointsMap();
        this.themeService.onMediaQueryChange()
            .pipe(map(([, currentBreakpoint]) => currentBreakpoint.width < xl), takeUntil(this.destroy$))
            .subscribe((isLessThanXl) => this.userPictureOnly = isLessThanXl);
        this.themeService.onThemeChange()
            .pipe(map(({ name }) => name), takeUntil(this.destroy$))
            .subscribe(themeName => this.currentTheme = themeName);
        this.menuService.onItemClick().subscribe((menu) => {
            if (menu.item.title == 'Log out') {
                console.log('Logout clicked ', menu);
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    changeTheme(themeName) {
        this.themeService.changeTheme(themeName);
    }
    toggleSidebar() {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();
        return false;
    }
    navigateHome() {
        this.menuService.navigateHome();
        return false;
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'ngx-header',
        styleUrls: ['./header.component.scss'],
        templateUrl: './header.component.html',
    }),
    __metadata("design:paramtypes", [NbSidebarService,
        NbMenuService,
        NbThemeService,
        UserData,
        LayoutService,
        NbMediaBreakpointsService])
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map