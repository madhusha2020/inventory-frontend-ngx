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
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Designation} from '../../../service/rest/model/designation';

@Component({
  selector: 'ngx-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})
export class EmployeeCreateComponent implements OnInit {

  employeeForm: FormGroup;
  employeeUser: EmployeeUser = {};
  user: User = {};
  employee: Employee = {};

  roles: Array<Role> = [];
  designations: Array<Designation> = [];
  assignedRoles: Map<string, Role> = new Map<string, Role>();

  nameTitleTypes = ServiceUtil.getNameTitlesTypes();
  genderTypes = ServiceUtil.getGenderTypes();
  civilStatusTypes = ServiceUtil.getCivilStatusTypes();

  constructor(private formBuilder: FormBuilder,
              private employeeControllerService: EmployeeControllerService,
              private roleControllerService: RoleControllerService,
              private userControllerService: UserControllerService,
              private tokenService: TokenService,
              private router: Router) {
  }

  get email() {
    return this.employeeForm.get('email');
  }

  get password() {
    return this.employeeForm.get('password');
  }

  get code() {
    return this.employeeForm.get('code');
  }

  get name() {
    return this.employeeForm.get('name');
  }

  get nametitle() {
    return this.employeeForm.get('nametitle');
  }

  get gender() {
    return this.employeeForm.get('gender');
  }

  get nic() {
    return this.employeeForm.get('nic');
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

  get dobirth() {
    return this.employeeForm.get('dobirth');
  }

  get dorecruite() {
    return this.employeeForm.get('dorecruite');
  }

  get callingname() {
    return this.employeeForm.get('callingname');
  }

  get civilstatus() {
    return this.employeeForm.get('civilstatus');
  }

  get designation() {
    return this.employeeForm.get('designation');
  }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      code: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      nic: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
      nametitle: [ServiceUtil.getMrTitleType(), [Validators.required]],
      name: [null, [Validators.required]],
      gender: [ServiceUtil.getMaleGenderType(), [Validators.required]],
      address: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(13), Validators.pattern('^((\\+91?)|(\\+94?)|0)?[0-9]{10}$')]],
      land: [null, [Validators.minLength(10), Validators.maxLength(13), Validators.pattern('^((\\+91?)|(\\+94?)|0)?[0-9]{10}$')]],
      dobirth: [null, [Validators.required]],
      dorecruite: [null, [Validators.required]],
      callingname: [null],
      civilstatus: [ServiceUtil.getSingleCivilStatusType(), [Validators.required]],
      designation: [ServiceUtil.getMaintenanceStaffDesignation(), [Validators.required]],
    });

    this.fetchDesignations();
    this.fetchRoles();
  }

  fetchDesignations() {
    this.employeeControllerService.getAllDesignationsUsingGET().subscribe(response => {
      console.log('Designations :', response);
      this.designations = response.designations;
    });
  }

  fetchRoles() {
    this.roleControllerService.getAllRolesUsingGET().subscribe(response => {
      console.log('Roles :', response);
      this.roles = response.roles;
    });
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

  imageUploadEvent(event) {
    console.log('Employee photo :', event);
    this.employee.photo = event;
  }

  submit() {
    this.user.userName = this.email.value;
    this.user.password = this.password.value;
    this.user.userId = this.tokenService.getUserName();

    this.employee.code = this.code.value;
    this.employee.email = this.email.value;
    this.employee.name = this.name.value;
    this.employee.nametitle = this.nametitle.value;
    this.employee.gender = this.gender.value;
    this.employee.nic = this.nic.value;
    this.employee.address = this.address.value;
    this.employee.mobile = this.mobile.value;
    this.employee.land = this.land.value;
    this.employee.dobirth = this.dobirth.value;
    this.employee.dorecruite = this.dorecruite.value;
    this.employee.callingname = this.callingname.value;
    this.employee.civilstatus = this.civilstatus.value;
    this.employee.designation = this.designation.value;
    this.employee.description = ServiceUtil.getCreateEmployeeDescription();
    this.employee.userId = this.tokenService.getUserName();

    this.employeeUser.roleNameList = new Array<string>();
    this.assignedRoles.forEach((value, key) => {
      this.employeeUser.roleNameList.push(key);
    });

    this.employeeUser.user = this.user;
    this.employeeUser.employee = this.employee;

    console.log('Employee User : ', this.employeeUser);

    this.userControllerService.saveEmployeeUsingPOST(this.employeeUser).subscribe(response => {
      console.log('Saved Employee :', response);
      Swal.fire('Success', 'Employee successfully created', 'success').then(value => {
        this.router.navigate(['/pages/employee/main']);
      });
    });
  }
}
