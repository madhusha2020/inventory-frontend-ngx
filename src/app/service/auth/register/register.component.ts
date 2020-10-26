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

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get name() {
    return this.registerForm.get('name');
  }

  get address() {
    return this.registerForm.get('address');
  }

  get contact1() {
    return this.registerForm.get('contact1');
  }

  get contact2() {
    return this.registerForm.get('contact2');
  }

  get fax() {
    return this.registerForm.get('fax');
  }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8)]],
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      contact1: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      contact2: [null, [Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      fax: [null, [Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    });
  }

  register() {
    this.loading = true;
    this.user = this.registerForm.value;
    console.log('User : ', this.user);
  }
}
