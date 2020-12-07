import {Component, OnInit} from '@angular/core';
import {Role, RoleControllerService, User, UserControllerService, UserWithUserRoles} from '../../../service/rest';
import {TokenService} from '../../../service/auth/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  userName: string;
  user: User = {};
  userWithUserRoles: UserWithUserRoles = {};
  userForm: FormGroup;

  roles: Array<Role> = [];
  roleNameList: Array<string> = [];
  assignedRoles: Map<string, Role> = new Map<string, Role>();

  constructor(private formBuilder: FormBuilder,
              private userControllerService: UserControllerService,
              private roleControllerService: RoleControllerService,
              private tokenService: TokenService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  get username() {
    return this.userForm.get('username');
  }

  get failedAttempts() {
    return this.userForm.get('failedAttempts');
  }

  get statusDescription() {
    return this.userForm.get('statusDescription');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.userName = params.id;
          this.getUser(params.id);
        } else {
          Swal.fire('Error', 'User not found', 'error');
        }
      }
    );
    this.fetchRoles();

    this.userForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      failedAttempts: [null, [Validators.required]],
      statusDescription: [null, [Validators.required]],
    });
  }

  getUser(id: string) {
    this.userControllerService.getUserByUserNameUsingGET(this.userName).subscribe(response => {
      console.log('User response :', response);
      this.user = response.user;
      this.roleNameList = response.roleNameList;
      this.setData();
    });
  }

  fetchRoles() {
    this.roleControllerService.getAllRolesUsingGET().subscribe(response => {
      console.log('Roles :', response);
      this.roles = response.roles;
    });
  }

  setData() {
    this.username.setValue(this.user.userName);
    this.failedAttempts.setValue(this.user.failedAttempts);
    this.statusDescription.setValue(ServiceUtil.getStatusDescription(this.user.status));

    this.roleNameList.forEach(role => {
      this.assignedRoles.set(role, {name: role});
    });
  }

  roleStateChange(event, role: Role) {
    if (event.target.checked) {
      this.assignedRoles.set(role.name, role);
    } else {
      this.assignedRoles.delete(role.name);
    }
    console.log('Assigned Roles :', this.assignedRoles);
  }

  activate() {
    console.log('Activate user');
    if (this.user.userName != this.tokenService.getUserName()) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Activate user : {0}'.replace('{0}', this.userName),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.userControllerService.activateUserUsingPUT({
            email: this.userName,
            userId: this.tokenService.getUserName()
          }).subscribe(response => {
            console.log('User activate :', response);
            Swal.fire('Success', 'User activate successfully', 'success').then(ok => {
              this.router.navigate(['/pages/user/main']);
            });
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Canceled
        }
      });

    } else {
      Swal.fire('Error', 'You cannot activate your own user record', 'error');
    }
  }

  suspend() {
    console.log('Suspend user');
    if (this.user.userName != this.tokenService.getUserName()) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Suspend user : {0}'.replace('{0}', this.userName),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.userControllerService.suspendUserUsingPUT({
            email: this.userName,
            userId: this.tokenService.getUserName()
          }).subscribe(response => {
            console.log('User suspend :', response);
            Swal.fire('Success', 'User suspend successfully', 'success').then(ok => {
              this.router.navigate(['/pages/user/main']);
            });
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Canceled
        }
      });
    } else {
      Swal.fire('Error', 'You cannot suspend your own user record', 'error');
    }
  }
}
