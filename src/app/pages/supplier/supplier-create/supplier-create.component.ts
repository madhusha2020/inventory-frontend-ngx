import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Role, RoleControllerService, Supplier, SupplierUser, User, UserControllerService} from '../../../service/rest';
import {ServiceUtil} from '../../../service/util/service-util';
import {TokenService} from '../../../service/auth/token.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.scss']
})
export class SupplierCreateComponent implements OnInit {

  supplierForm: FormGroup;
  supplierUser: SupplierUser = {};
  user: User = {};
  supplier: Supplier = {};

  supplierTypes: Array<string> = ServiceUtil.getSupplierTypes();
  roles: Array<Role> = [];
  assignedRoles: Map<string, Role> = new Map<string, Role>();

  constructor(private formBuilder: FormBuilder,
              private roleControllerService: RoleControllerService,
              private userControllerService: UserControllerService,
              private tokenService: TokenService,
              private router: Router) {
  }

  get code() {
    return this.supplierForm.get('code');
  }

  get name() {
    return this.supplierForm.get('name');
  }

  get userName() {
    return this.supplierForm.get('userName');
  }

  get password() {
    return this.supplierForm.get('password');
  }

  get type() {
    return this.supplierForm.get('type');
  }

  get address() {
    return this.supplierForm.get('address');
  }

  get contact1() {
    return this.supplierForm.get('contact1');
  }

  get contact2() {
    return this.supplierForm.get('contact2');
  }

  get fax() {
    return this.supplierForm.get('fax');
  }

  ngOnInit(): void {
    this.supplierForm = this.formBuilder.group({
      code: [null, [Validators.required]],
      name: [null, [Validators.required]],
      userName: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      type: [ServiceUtil.getExternalCustomerType(), [Validators.required]],
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

    this.supplier.code = this.code.value;
    this.supplier.name = this.name.value;
    this.supplier.email = this.userName.value;
    this.supplier.address = this.address.value;
    this.supplier.contact1 = this.contact1.value;
    this.supplier.contact2 = this.contact2.value;
    this.supplier.fax = this.fax.value;
    this.supplier.description = ServiceUtil.getCreateSupplierDescription();
    this.supplier.type = this.type.value;
    this.supplier.userId = this.tokenService.getUserName();

    this.supplierUser.roleNameList = new Array<string>();
    this.assignedRoles.forEach((value, key) => {
      this.supplierUser.roleNameList.push(key);
    });

    this.supplierUser.user = this.user;
    this.supplierUser.supplier = this.supplier;

    console.log('Supplier User : ', this.supplierUser);

    this.userControllerService.saveSupplierUsingPOST(this.supplierUser).subscribe(response => {
      console.log('Saved Supplier :', response);
      Swal.fire('Success', 'Supplier successfully created', 'success').then(value => {
        this.router.navigate(['/pages/supplier/main']);
      });
    });
  }
}
