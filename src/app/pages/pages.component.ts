import {Component, OnInit} from '@angular/core';

import {MENU_ITEMS} from './pages-menu';
import {NbMenuItem} from '@nebular/theme';
import {TokenService} from '../service/auth/token.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="authorizedMenu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {

  menu = MENU_ITEMS;
  authorizedMenu: Array<NbMenuItem> = [];

  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.menu.forEach(item => {
      if (this.hasRole(item)) {
        this.authorizedMenu.push(item);
      }
    });
  }

  hasRole(menuItem: NbMenuItem): boolean {

    let authoritiesArray: Array<string> = menuItem.data.split(',');
    let authorized = false;

    this.tokenService.getAuthorities().forEach((value, key) => {
      authoritiesArray.forEach((requestedRole, index) => {
        if (requestedRole == key) {
          authorized = true;
        }
      });
    });
    return authorized;
  }
}
