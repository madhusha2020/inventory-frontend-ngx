import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Customer, CustomerUser, User} from '../../rest';
import {Router} from '@angular/router';
import {TokenService} from '../token.service';
import {ServiceUtil} from '../../util/service-util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  customerUser: CustomerUser = {};
  user: User = {};
  customer: Customer = {};

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
    this.user.userName = this.userName.value;
    this.user.password = this.password.value;
    this.user.userId = ServiceUtil.getSystemUser();

    this.customer.name = this.name.value;
    this.customer.email = this.userName.value;
    this.customer.address = this.address.value;
    this.customer.contact1 = this.contact1.value;
    this.customer.contact2 = this.contact2.value;
    this.customer.fax = this.fax.value;
    this.customer.description = ServiceUtil.getRegisteredCustomerDescription();
    this.customer.type = ServiceUtil.getExternalCustomerType();
    this.customer.userId = ServiceUtil.getSystemUser();

    this.customerUser.user = this.user;
    this.customerUser.customer = this.customer;

    console.log('Customer User : ', this.customerUser);
    this.tokenService.register(this.customerUser);
  }
}
