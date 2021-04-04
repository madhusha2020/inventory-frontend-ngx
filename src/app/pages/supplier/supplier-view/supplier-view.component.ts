import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {ServiceUtil} from '../../../service/util/service-util';
import {
  Role,
  RoleControllerService,
  Supplier,
  SupplierControllerService,
  SupplierUser,
  User,
  UserControllerService
} from '../../../service/rest';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TokenService} from '../../../service/auth/token.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ngx-supplier-view',
  templateUrl: './supplier-view.component.html',
  styleUrls: ['./supplier-view.component.scss']
})
export class SupplierViewComponent implements OnInit {

  editMode: boolean;
  disabledProperty = 'disabled';
  title: string;

  supplierForm: FormGroup;
  supplierPasswordForm: FormGroup;

  supplierUser: SupplierUser = {};
  user: User = {};
  supplier: Supplier = {};
  supplierTypes: Array<string> = ServiceUtil.getSupplierTypes();

  roles: Array<Role> = [];
  roleNameList: Array<string> = [];
  assignedRoles: Map<string, Role> = new Map<string, Role>();

  constructor(private formBuilder: FormBuilder,
              private roleControllerService: RoleControllerService,
              private userControllerService: UserControllerService,
              private supplierControllerService: SupplierControllerService,
              private tokenService: TokenService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  get code() {
    return this.supplierForm.get('code');
  }

  get name() {
    return this.supplierForm.get('name');
  }

  get email() {
    return this.supplierForm.get('email');
  }

  get oldPassword() {
    return this.supplierPasswordForm.get('oldPassword');
  }

  get password() {
    return this.supplierPasswordForm.get('password');
  }

  get confirmPassword() {
    return this.supplierPasswordForm.get('confirmPassword');
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

  get type() {
    return this.supplierForm.get('type');
  }

  ngOnInit(): void {
    this.editMode = false;
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.supplier.id = params.id;
          this.fetchSupplier(params.id);
        } else {
          Swal.fire('Error', 'Supplier not found', 'error');
        }
      }
    );
    this.fetchRoles();

    this.supplierForm = this.formBuilder.group({
      code: [null, [Validators.required]],
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      address: [null, [Validators.required]],
      contact1: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      contact2: [null, [Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      fax: [null, [Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      type: [ServiceUtil.getLocalSupplierType(), [Validators.required]],
    });

    this.supplierPasswordForm = this.formBuilder.group({
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8)]],
      oldPassword: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  fetchSupplier(id: string) {
    this.userControllerService.getSupplierByIdUsingGET(id).subscribe(response => {
      console.log('SupplierUser Data :', response);
      this.supplier = response.supplier;
      this.user = response.user;
      this.roleNameList = response.roleNameList;
      console.log('Supplier Data :', this.supplier);
      console.log('User Data :', this.user);
      console.log('Role Name List Data :', this.roleNameList);
      this.setData();
    });
  }

  setData() {
    this.email.setValue(this.supplier.email);
    this.code.setValue(this.supplier.code);
    this.name.setValue(this.supplier.name);
    this.address.setValue(this.supplier.address);
    this.contact1.setValue(this.supplier.contact1);
    this.contact2.setValue(this.supplier.contact2);
    this.fax.setValue(this.supplier.fax);
    this.type.setValue(this.supplier.type);

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
    console.log('Supplier Type : ', event);
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

  updateSupplierDetails() {
    this.updateSupplier();
  }

  updateSupplierPassword() {
    this.user.password = this.password.value;
    this.user.oldPassword = this.oldPassword.value;
    this.updateSupplier();
  }

  suspend() {
    console.log('Suspend supplier');
    Swal.fire({
      title: 'Are you sure?',
      text: 'Suspend supplier : {0}'.replace('{0}', this.supplier.name),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.supplierControllerService.suspendSupplierUsingPUT({
          id: this.supplier.id,
          userId: this.tokenService.getUserName()
        }).subscribe(response => {
          console.log('Suspend supplier :', response);
          Swal.fire('Success', 'Supplier suspend successfully', 'success').then(ok => {
            this.router.navigate(['/pages/supplier/main']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }

  activate() {
    console.log('Activate supplier');
    Swal.fire({
      title: 'Are you sure?',
      text: 'Activate supplier : {0}'.replace('{0}', this.supplier.name),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.supplierControllerService.activateSupplierUsingPUT({
          id: this.supplier.id,
          userId: this.tokenService.getUserName()
        }).subscribe(response => {
          console.log('Activate supplier :', response);
          Swal.fire('Success', 'Supplier activate successfully', 'success').then(ok => {
            this.router.navigate(['/pages/supplier/main']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }

  private updateSupplier() {
    this.user.userId = this.tokenService.getUserName();

    this.supplier.name = this.name.value;
    this.supplier.email = this.email.value;
    this.supplier.address = this.address.value;
    this.supplier.contact1 = this.contact1.value;
    this.supplier.contact2 = this.contact2.value;
    this.supplier.fax = this.fax.value;
    this.supplier.type = this.type.value;
    this.supplier.description = ServiceUtil.getUpdateSupplierDescription();
    this.supplier.userId = this.tokenService.getUserName();

    this.supplierUser.roleNameList = new Array<string>();
    this.assignedRoles.forEach((value, key) => {
      this.supplierUser.roleNameList.push(key);
    });

    this.supplierUser.user = this.user;
    this.supplierUser.supplier = this.supplier;

    console.log('Supplier User : ', this.supplierUser);

    Swal.fire({
      title: 'Are you sure?',
      text: 'Update supplier : {0}'.replace('{0}', this.supplier.name),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.userControllerService.updateSupplierUsingPUT(this.supplierUser).subscribe(response => {
          console.log('Updated Supplier :', response);
          Swal.fire('Success', 'Supplier successfully updated', 'success').then(value => {
            this.router.navigate(['/pages/supplier/main']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }
}

