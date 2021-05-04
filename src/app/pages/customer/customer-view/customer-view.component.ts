import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {
  Customer,
  CustomerControllerService,
  CustomerUser,
  Role,
  RoleControllerService,
  User,
  UserControllerService
} from '../../../service/rest';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceUtil} from '../../../service/util/service-util';
import {TokenService} from '../../../service/auth/token.service';

@Component({
  selector: 'ngx-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  editMode: boolean;
  disabledProperty = 'disabled';
  title: string;

  customerForm: FormGroup;
  customerPasswordForm: FormGroup;

  customerUser: CustomerUser = {};
  user: User = {};
  customer: Customer = {};

  customerTypes: Array<string> = ServiceUtil.getCustomerTypes();

  roles: Array<Role> = [];
  roleNameList: Array<string> = [];
  assignedRoles: Map<string, Role> = new Map<string, Role>();

  constructor(private formBuilder: FormBuilder,
              private roleControllerService: RoleControllerService,
              private userControllerService: UserControllerService,
              private customerControllerService: CustomerControllerService,
              private tokenService: TokenService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  get name() {
    return this.customerForm.get('name');
  }

  get userName() {
    return this.customerForm.get('userName');
  }

  get oldPassword() {
    return this.customerPasswordForm.get('oldPassword');
  }

  get password() {
    return this.customerPasswordForm.get('password');
  }

  get confirmPassword() {
    return this.customerPasswordForm.get('confirmPassword');
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
    this.editMode = false;
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.fetchCustomer(params.id);
        } else {
          Swal.fire('Error', 'Customer not found', 'error');
        }
      }
    );
    this.fetchRoles();

    this.customerForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      userName: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      type: [ServiceUtil.getExternalCustomerType(), [Validators.required]],
      address: [null, [Validators.required]],
      contact1: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(13), Validators.pattern('^((\\+91?)|(\\+94?)|0)?[0-9]{10}$')]],
      contact2: [null, [Validators.minLength(10), Validators.maxLength(13), Validators.pattern('^((\\+91?)|(\\+94?)|0)?[0-9]{10}$')]],
      fax: [null, [Validators.minLength(10), Validators.maxLength(13), Validators.pattern('^((\\+91?)|(\\+94?)|0)?[0-9]{10}$')]],
    });

    this.customerPasswordForm = this.formBuilder.group({
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8)]],
      oldPassword: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  fetchCustomer(id: string) {
    this.userControllerService.getCustomerByIdUsingGET(id).subscribe(response => {
      console.log('CustomerUser Data :', response);
      this.customer = response.customer;
      this.user = response.user;
      this.roleNameList = response.roleNameList;
      console.log('Customer Data :', this.customer);
      console.log('User Data :', this.user);
      console.log('Role Name List Data :', this.roleNameList);
      this.setData();
    });
  }

  setData() {
    this.userName.setValue(this.user.userName);

    this.name.setValue(this.customer.name);
    this.address.setValue(this.customer.address);
    this.contact1.setValue(this.customer.contact1);
    this.contact2.setValue(this.customer.contact2);
    this.fax.setValue(this.customer.fax);
    this.type.setValue(this.customer.type);

    this.roleNameList.forEach(role => {
      this.assignedRoles.set(role, {name: role});
    });
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

  enableEditMode() {
    this.editMode = true;
    this.disabledProperty = null;
    this.title = 'Edit';
  }

  disabledEditMode() {
    this.editMode = false;
    this.disabledProperty = 'disabled';
    this.title = null;
    this.setData();
  }

  updateCustomerDetails() {
    this.updateCustomer();
  }

  updateCustomerPassword() {
    this.user.password = this.password.value;
    this.user.oldPassword = this.oldPassword.value;
    this.updateCustomer();
  }

  suspend() {
    console.log('Suspend customer');
    if (this.customer.email != this.tokenService.getUserName()) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Suspend customer : {0}'.replace('{0}', this.customer.name),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.customerControllerService.suspendCustomerUsingPUT({id: this.customer.id, userId: this.tokenService.getUserName()}).subscribe(response => {
            console.log('Suspend customer :', response);
            Swal.fire('Success', 'Customer suspend successfully', 'success').then(ok => {
              this.router.navigate(['/pages/customer/main']);
            });
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Canceled
        }
      });

    } else {
      Swal.fire('Error', 'You cannot suspend your own customer record', 'error');
    }
  }

  activate() {
    console.log('Activate customer');
    if (this.customer.email != this.tokenService.getUserName()) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Activate customer : {0}'.replace('{0}', this.customer.name),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.customerControllerService.activateCustomerUsingPUT({id: this.customer.id, userId: this.tokenService.getUserName()}).subscribe(response => {
            console.log('Activate customer :', response);
            Swal.fire('Success', 'Customer activate successfully', 'success').then(ok => {
              this.router.navigate(['/pages/customer/main']);
            });
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Canceled
        }
      });

    } else {
      Swal.fire('Error', 'You cannot activate your own customer record', 'error');
    }
  }

  private updateCustomer() {
    this.user.userId = this.tokenService.getUserName();

    this.customer.name = this.name.value;
    this.customer.email = this.userName.value;
    this.customer.address = this.address.value;
    this.customer.contact1 = this.contact1.value;
    this.customer.contact2 = this.contact2.value;
    this.customer.fax = this.fax.value;
    this.customer.description = ServiceUtil.getUpdateCustomerDescription();
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
      text: 'Update customer : {0}'.replace('{0}', this.customer.name),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.userControllerService.updateCustomerUsingPUT(this.customerUser).subscribe(response => {
          console.log('Updated Customer :', response);
          Swal.fire('Success', 'Customer successfully updated', 'success').then(value => {
            this.router.navigate(['/pages/customer/main']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }
}
