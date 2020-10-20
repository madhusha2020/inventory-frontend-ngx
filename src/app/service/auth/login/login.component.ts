import {Component, OnInit} from '@angular/core';
import {TokenService} from '../token.service';
import {User} from '../../rest';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: User = {};

  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.user.userName = 'admin@wsolution.com';
    this.user.password = 'admin';
    this.tokenService.login(this.user);
  }
}
