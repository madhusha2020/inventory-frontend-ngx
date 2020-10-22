import {Component, OnInit} from '@angular/core';
import {TokenService} from '../token.service';
import {User} from '../../rest';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void {
  }

  login() {
    let user: User = {};
    user.userName = 'admin@wsolution.com';
    user.password = 'admin';
    this.tokenService.login(user);
  }

}
