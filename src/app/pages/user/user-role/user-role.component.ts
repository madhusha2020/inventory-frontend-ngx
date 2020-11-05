import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Module, Privilege, Role, RoleControllerService} from '../../../service/rest';
import {TokenService} from '../../../service/auth/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss']
})
export class UserRoleComponent implements OnInit {

  userRoleForm: FormGroup;
  permissionList: Array<Module> = [];
  assignedPermissions: Map<number, Module> = new Map<number, Module>();
  role: Role = {};

  constructor(private formBuilder: FormBuilder,
              private tokenService: TokenService,
              private router: Router,
              private roleControllerService: RoleControllerService) {
  }

  get name() {
    return this.userRoleForm.get('name');
  }

  ngOnInit(): void {
    this.userRoleForm = this.formBuilder.group({
      name: [null, [Validators.required]]
    });
    this.fetchModules();
  }

  fetchModules() {
    this.roleControllerService.getAllModulesUsingGET().subscribe(response => {
      console.log('Modules Data :', response.modules);
      this.permissionList = response.modules;
      let dashboardPermission = this.permissionList.find(value => value.permissionCode == 'INV');
      this.assignedPermissions.set(dashboardPermission.id, dashboardPermission);
    });
  }

  submit() {
    this.role = this.userRoleForm.value;
    this.role.userId = this.tokenService.getUserName();
    this.role.privileges = new Array<Privilege>();

    this.assignedPermissions.forEach((value, key) => {

      let privilege: Privilege = {};
      privilege.module = value;
      this.role.privileges.push(privilege);

    });
    this.role.name.replace(' ', '_').toUpperCase();
    console.log('Submit Data :', this.role);

    this.roleControllerService.saveUserRoleUsingPOST(this.role).subscribe(response => {
      console.log('Saved Role :', response);
      this.router.navigate(['/pages/user/role-main']);
    });
  }

  permissionStateChange(event, permission: Module) {
    if (event.target.checked) {
      this.assignedPermissions.set(permission.id, permission);
    } else {
      this.assignedPermissions.delete(permission.id);
    }
    console.log('Assigned Permissions :', this.assignedPermissions);
  }
}
