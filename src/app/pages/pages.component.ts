import {Component, OnInit} from '@angular/core';

import {MENU_ITEMS} from './pages-menu';
import {NbMenuItem} from '@nebular/theme';
import {TokenService} from '../service/auth/token.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout [disabledSideBard]="!isLoggedIn">
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {

  isLoggedIn: boolean;
  menu = MENU_ITEMS;

  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.tokenService.isLoggedIn();
    if (this.isLoggedIn) {
      this.menu.forEach(item => {
        this.hasRole(item);
        if (item.children) {
          item.children.forEach(children => {
            this.hasRole(children);
          });
        }
      });
    }
  }

  hasRole(menuItem: NbMenuItem): void {

    let authoritiesArray: Array<string> = menuItem.data.split(',');
    menuItem.hidden = true;

    this.tokenService.getAuthorities().forEach((value, key) => {
      authoritiesArray.forEach((requestedRole, index) => {
        if (requestedRole == key) {
          menuItem.hidden = false;
        }
      });
    });
  }
}
