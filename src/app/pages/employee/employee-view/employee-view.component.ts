import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  Employee,
  EmployeeControllerService,
  EmployeeUser,
  Role,
  RoleControllerService,
  User,
  UserControllerService
} from '../../../service/rest';
import {ServiceUtil} from '../../../service/util/service-util';
import {TokenService} from '../../../service/auth/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class EmployeeViewComponent implements OnInit {

  editMode: boolean;
  disabledProperty = 'disabled';
  title: string;

  employeeForm: FormGroup;
  employeePasswordForm: FormGroup;

  employeeUser: EmployeeUser = {};
  user: User = {};
  employee: Employee = {};

  roles: Array<Role> = [];
  roleNameList: Array<string> = [];
  assignedRoles: Map<string, Role> = new Map<string, Role>();

  nameTitleTypes = ServiceUtil.getNameTitlesTypes();
  genderTypes = ServiceUtil.getGenderTypes();
  civilStatusTypes = ServiceUtil.getCivilStatusTypes();
  designations = ServiceUtil.getDesignations();

  constructor(private formBuilder: FormBuilder,
              private roleControllerService: RoleControllerService,
              private userControllerService: UserControllerService,
              private employeeControllerService: EmployeeControllerService,
              private tokenService: TokenService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  get code() {
    return this.employeeForm.get('code');
  }

  get name() {
    return this.employeeForm.get('name');
  }

  get email() {
    return this.employeeForm.get('email');
  }

  get nic() {
    return this.employeeForm.get('nic');
  }

  get oldPassword() {
    return this.employeePasswordForm.get('oldPassword');
  }

  get password() {
    return this.employeePasswordForm.get('password');
  }

  get confirmPassword() {
    return this.employeePasswordForm.get('confirmPassword');
  }

  get address() {
    return this.employeeForm.get('address');
  }

  get mobile() {
    return this.employeeForm.get('mobile');
  }

  get land() {
    return this.employeeForm.get('land');
  }

  get nametitle() {
    return this.employeeForm.get('nametitle');
  }

  get gender() {
    return this.employeeForm.get('gender');
  }

  get civilstatus() {
    return this.employeeForm.get('civilstatus');
  }

  get designation() {
    return this.employeeForm.get('designation');
  }

  get dobirth() {
    return this.employeeForm.get('dobirth');
  }

  get dorecruite() {
    return this.employeeForm.get('dorecruite');
  }

  get callingname() {
    return this.employeeForm.get('callingname');
  }

  ngOnInit(): void {
    this.editMode = false;
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.employee.id = params.id;
          this.fetchEmployee(params.id);
        } else {
          Swal.fire('Error', 'Employee not found', 'error');
        }
      }
    );
    this.fetchRoles();

    this.employeeForm = this.formBuilder.group({
      code: [null, [Validators.required]],
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      nic: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
      address: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(13), Validators.pattern('^((\\+91?)|(\\+94?)|0)?[0-9]{10}$')]],
      land: [null, [Validators.minLength(10), Validators.maxLength(13), Validators.pattern('^((\\+91?)|(\\+94?)|0)?[0-9]{10}$')]],
      nametitle: [ServiceUtil.getMrTitleType(), [Validators.required]],
      gender: [ServiceUtil.getMaleGenderType(), [Validators.required]],
      civilstatus: [ServiceUtil.getSingleCivilStatusType(), [Validators.required]],
      designation: [ServiceUtil.getMaintenanceStaffDesignation(), [Validators.required]],
      dobirth: [null, [Validators.required]],
      dorecruite: [null, [Validators.required]],
      callingname: [null],
    });

    this.employeePasswordForm = this.formBuilder.group({
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8)]],
      oldPassword: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  fetchEmployee(id: string) {
    this.userControllerService.getEmployeeByIdUsingGET(id).subscribe(response => {
      console.log('EmployeeUser Data :', response);
      this.employee = response.employee;
      this.user = response.user;
      this.roleNameList = response.roleNameList;
      console.log('Employee Data :', this.employee);
      console.log('User Data :', this.user);
      console.log('Role Name List Data :', this.roleNameList);
      this.setData();
    });
  }

  setData() {
    this.email.setValue(this.employee.email);
    this.code.setValue(this.employee.code);
    this.name.setValue(this.employee.name);
    this.nic.setValue(this.employee.nic);
    this.address.setValue(this.employee.address);
    this.mobile.setValue(this.employee.mobile);
    this.land.setValue(this.employee.land);
    this.nametitle.setValue(this.employee.nametitle);
    this.gender.setValue(this.employee.gender);
    this.civilstatus.setValue(this.employee.civilstatus);
    this.designation.setValue(this.employee.designation);
    this.dobirth.setValue(new Date(this.employee.dobirth));
    this.dorecruite.setValue(new Date(this.employee.dorecruite));
    this.callingname.setValue(this.employee.callingname);

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

  imageUploadEvent(event) {
    console.log('Image Upload Change :', event);
    this.employee.photo = event;
  }

  dobChangeEvent(event) {
    console.log('DOB Change :', event);
    this.employee.dobirth = event;
  }

  dorChangeEvent(event) {
    console.log('DOR Change :', event);
    this.employee.dorecruite = event;
  }

  nameTitleStateChange(event) {
    console.log('Employee Title : ', event);
    this.nametitle.setValue(event);
  }

  genderStateChange(event) {
    console.log('Employee Gender : ', event);
    this.gender.setValue(event);
  }

  civilStateChange(event) {
    console.log('Employee Civil Status : ', event);
    this.civilstatus.setValue(event);
  }

  designationStateChange(event) {
    console.log('Employee Designation : ', event);
    this.designation.setValue(event);
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

  updateEmployeeDetails() {
    this.updateEmployee();
  }

  updateEmployeePassword() {
    this.user.password = this.password.value;
    this.user.oldPassword = this.oldPassword.value;
    this.updateEmployee();
  }

  suspend() {
    console.log('Suspend employee');
    if (this.employee.email != this.tokenService.getUserName()) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Suspend employee : {0}'.replace('{0}', this.employee.name),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.employeeControllerService.suspendEmployeeUsingPUT({
            id: this.employee.id,
            userId: this.tokenService.getUserName()
          }).subscribe(response => {
            console.log('Suspend employee :', response);
            Swal.fire('Success', 'Employee suspend successfully', 'success').then(ok => {
              this.router.navigate(['/pages/employee/main']);
            });
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Canceled
        }
      });

    } else {
      Swal.fire('Error', 'You cannot suspend your own employee record', 'error');
    }
  }

  activate() {
    console.log('Activate employee');
    if (this.employee.email != this.tokenService.getUserName()) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Activate employee : {0}'.replace('{0}', this.employee.name),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.employeeControllerService.activateEmployeeUsingPUT({
            id: this.employee.id,
            userId: this.tokenService.getUserName()
          }).subscribe(response => {
            console.log('Activate employee :', response);
            Swal.fire('Success', 'Employee activate successfully', 'success').then(ok => {
              this.router.navigate(['/pages/employee/main']);
            });
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Canceled
        }
      });

    } else {
      Swal.fire('Error', 'You cannot activate your own employee record', 'error');
    }
  }

  private updateEmployee() {
    this.user.userId = this.tokenService.getUserName();

    this.employee.name = this.name.value;
    this.employee.email = this.email.value;
    this.employee.nic = this.nic.value;
    this.employee.nametitle = this.nametitle.value;
    this.employee.gender = this.gender.value;
    this.employee.civilstatus = this.civilstatus.value;
    this.employee.designation = this.designation.value;
    this.employee.callingname = this.callingname.value;
    this.employee.address = this.address.value;
    this.employee.mobile = this.mobile.value;
    this.employee.land = this.land.value;
    this.employee.description = ServiceUtil.getUpdateEmployeeDescription();
    this.employee.userId = this.tokenService.getUserName();

    this.employeeUser.roleNameList = new Array<string>();
    this.assignedRoles.forEach((value, key) => {
      this.employeeUser.roleNameList.push(key);
    });

    this.employeeUser.user = this.user;
    this.employeeUser.employee = this.employee;

    console.log('Employee User : ', this.employeeUser);

    Swal.fire({
      title: 'Are you sure?',
      text: 'Update employee : {0}'.replace('{0}', this.employee.name),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.userControllerService.updateEmployeeUsingPUT(this.employeeUser).subscribe(response => {
          console.log('Updated Employee :', response);
          Swal.fire('Success', 'Employee successfully updated', 'success').then(value => {
            this.router.navigate(['/pages/employee/main']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }
}

