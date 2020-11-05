import {Component, OnInit} from '@angular/core';
import {TokenService} from '../token.service';
import {User} from '../../rest';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User = {};

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private tokenService: TokenService) {
  }

  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  login() {
    this.user = this.loginForm.value;
    console.log('User : ', this.user);
    this.tokenService.login(this.user);
  }
}

