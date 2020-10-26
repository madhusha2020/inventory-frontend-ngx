import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../rest';
import {Router} from '@angular/router';
import {TokenService} from '../token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user: User = {};
  loading: boolean;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private tokenService: TokenService) {
  }

  get userName() {
    return this.registerForm.get('userName');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get name() {
    return this.registerForm.get('name');
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      name: [null, [Validators.required]],
    });
  }

  register() {
    this.loading = true;
    this.user = this.registerForm.value;
    console.log('User : ', this.user);
  }
}
