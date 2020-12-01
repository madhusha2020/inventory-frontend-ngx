import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbMediaBreakpointsService, NbMenuBag, NbMenuService, NbSidebarService, NbThemeService} from '@nebular/theme';
import {LayoutService} from '../../../@core/utils';
import {map, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {TokenService} from '../../../service/auth/token.service';
import {Router} from '@angular/router';
import {User} from '../../../service/rest';
import {ShoppingCartService} from '../../../service/shopping-cart/shopping-cart.service';
import {NotificationService} from '../../../service/notification/notification.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  isLoggedIn: boolean;
  userPictureOnly = false;
  user: User = {};
  themes = [
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
  currentTheme = 'default';
  userMenu = [{title: 'Shopping Cart'}, {title: 'Notifications'}, {title: 'Log out'}];
  externalUserMenu = [{title: 'Shopping Cart'}, {title: 'Register'}, {title: 'Log in'}];
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              private tokenService: TokenService,
              private shoppingCartService: ShoppingCartService,
              private notificationService: NotificationService,
              private router: Router) {
  }

  ngOnInit() {
    this.isLoggedIn = this.tokenService.isLoggedIn();
    this.currentTheme = this.themeService.currentTheme;
    this.user.userName = this.tokenService.getUserName();

    const {xl} = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({name}) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);

    this.menuService.onItemClick().subscribe((menu: NbMenuBag) => {
      if (menu.item.title == 'Shopping Cart') {
        this.router.navigate(['/pages/cart']);
        console.log('Shopping Cart clicked ', menu);
      } else if (menu.item.title == 'Notifications') {
        this.router.navigate(['/pages/notification/main']);
        console.log('Notifications clicked ', menu);
      } else if (menu.item.title == 'Register') {
        this.router.navigate(['/auth/register']);
        console.log('Logout clicked ', menu);
      } else if (menu.item.title == 'Log in') {
        this.router.navigate(['/auth/login']);
        console.log('Logout clicked ', menu);
      } else if (menu.item.title == 'Log out') {
        this.tokenService.logout();
        this.router.navigate(['/auth/login']);
        console.log('Logout clicked ', menu);
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
