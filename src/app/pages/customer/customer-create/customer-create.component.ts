import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TokenService} from '../../../service/auth/token.service';
import {Router} from '@angular/router';
import {Customer, CustomerUser, Role, RoleControllerService, User, UserControllerService} from '../../../service/rest';
import {ServiceUtil} from '../../../service/util/service-util';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {

  customerForm: FormGroup;
  customerUser: CustomerUser = {};
  user: User = {};
  customer: Customer = {};

  customerTypes: Array<string> = ServiceUtil.getCustomerTypes();
  roles: Array<Role> = [];
  assignedRoles: Map<string, Role> = new Map<string, Role>();

  constructor(private formBuilder: FormBuilder,
              private roleControllerService: RoleControllerService,
              private userControllerService: UserControllerService,
              private tokenService: TokenService,
              private router: Router) {
  }

  get name() {
    return this.customerForm.get('name');
  }

  get userName() {
    return this.customerForm.get('userName');
  }

  get password() {
    return this.customerForm.get('password');
  }

  get type() {
    return this.customerForm.get('type');
  }

  get address() {
    return this.customerForm.get('address');
  }

  get contact1() {
    return this.customerForm.get('contact1');
  }

  get contact2() {
    return this.customerForm.get('contact2');
  }

  get fax() {
    return this.customerForm.get('fax');
  }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      userName: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      type: [ServiceUtil.getNewCustomerType(), [Validators.required]],
      address: [null, [Validators.required]],
      contact1: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      contact2: [null, [Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      fax: [null, [Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    });

    this.fetchRoles();
  }

  fetchRoles() {
    this.roleControllerService.getAllRolesUsingGET().subscribe(response => {
      console.log('Roles :', response);
      this.roles = response.roles;
    });
  }

  typeStateChange(event) {
    console.log('Customer Type : ', event);
    this.type.setValue(event);
  }

  roleStateChange(event, role: Role) {
    if (event.target.checked) {
      this.assignedRoles.set(role.name, role);
    } else {
      this.assignedRoles.delete(role.name);
    }
    console.log('Assigned Roles :', this.assignedRoles);
  }

  submit() {
    this.user.userName = this.userName.value;
    this.user.password = this.password.value;
    this.user.userId = this.tokenService.getUserName();

    this.customer.name = this.name.value;
    this.customer.email = this.userName.value;
    this.customer.address = this.address.value;
    this.customer.contact1 = this.contact1.value;
    this.customer.contact2 = this.contact2.value;
    this.customer.fax = this.fax.value;
    this.customer.description = ServiceUtil.getCreateCustomerDescription();
    this.customer.type = this.type.value;
    this.customer.userId = this.tokenService.getUserName();

    this.customerUser.roleNameList = new Array<string>();
    this.assignedRoles.forEach((value, key) => {
      this.customerUser.roleNameList.push(key);
    });

    this.customerUser.user = this.user;
    this.customerUser.customer = this.customer;

    console.log('Customer User : ', this.customerUser);

    Swal.fire({
      title: 'Are you sure?',
      text: 'Create customer : {0}'.replace('{0}', this.customer.name),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.userControllerService.saveCustomerUsingPOST3(this.customerUser).subscribe(response => {
          console.log('Saved Customer :', response);
          this.router.navigate(['/pages/customer/main']);
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }
}
