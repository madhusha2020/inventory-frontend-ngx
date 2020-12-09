import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Module, Privilege, Role, RoleControllerService, UserControllerService} from '../../../service/rest';
import {TokenService} from '../../../service/auth/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-user-role-view',
  templateUrl: './user-role-view.component.html',
  styleUrls: ['./user-role-view.component.scss']
})
export class UserRoleViewComponent implements OnInit {

  editMode: boolean;
  userRoleForm: FormGroup;
  roleName: string;
  role: Role = {};

  permissionList: Array<Module> = [];
  assignedPermissions: Map<number, Module> = new Map<number, Module>();

  constructor(private formBuilder: FormBuilder,
              private userControllerService: UserControllerService,
              private roleControllerService: RoleControllerService,
              private tokenService: TokenService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  get name() {
    return this.userRoleForm.get('name');
  }

  ngOnInit(): void {
    this.editMode = false;
    this.userRoleForm = this.formBuilder.group({
      name: [null, [Validators.required]]
    });

    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.roleName = params.id;
          this.name.setValue(this.roleName.split('_').join(' ').toUpperCase());
          this.fetchModules();
        } else {
          Swal.fire('Error', 'Role not found', 'error');
        }
      }
    );
  }

  fetchModules() {
    this.roleControllerService.getAllModulesUsingGET().subscribe(response => {
      console.log('Modules Data :', response.modules);
      this.permissionList = response.modules;
      let dashboardPermission = this.permissionList.find(value => value.permissionCode == 'INV');
      this.assignedPermissions.set(dashboardPermission.id, dashboardPermission);
      this.getRole(this.roleName);
    });
  }

  getRole(roleName: string) {
    this.roleControllerService.getRoleByRoleNameUsingGET(roleName).subscribe(response => {
      console.log('Role response :', response);
      response.privileges.forEach(privilages => {
        if (privilages.status == 1) {
          let permission = this.permissionList.find(value => value.id == privilages.privilegeId.moduleId);
          this.assignedPermissions.set(permission.id, permission);
        }
      });
    });
  }

  permissionStateChange(event, permission: Module) {
    if (event.target.checked) {
      this.assignedPermissions.set(permission.id, permission);
    } else {
      this.assignedPermissions.delete(permission.id);
    }
    console.log('Assigned Permissions :', this.assignedPermissions);
    this.editMode = true;
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

    Swal.fire({
      title: 'Are you sure?',
      text: 'Update role : {0}'.replace('{0}', this.role.name),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.role.name = this.role.name.replace(' ', '_').toUpperCase();
        this.roleControllerService.updateUserRoleUsingPUT(this.role).subscribe(response => {
          console.log('Updated Role :', response);
          this.router.navigate(['/pages/user/role-main']);
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }
}
