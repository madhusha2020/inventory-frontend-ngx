import { Component, OnInit } from '@angular/core';
import {Role, RoleControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-user-role-main',
  templateUrl: './user-role-main.component.html',
  styleUrls: ['./user-role-main.component.scss']
})
export class UserRoleMainComponent implements OnInit {

  roles: Array<Role> = [];

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
        addable: false,
        editable: false,
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private roleControllerService: RoleControllerService,
              private searchService: NbSearchService) {

    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        console.log('Search', data.term);
        this.source.setFilter([
          {
            field: 'name',
            search: data.term
          }
        ], false);
      });
  }

  ngOnInit(): void {
    this.fetchRoles();
  }

  fetchRoles() {
    this.roleControllerService.getAllRolesUsingGET().subscribe(response => {
      console.log('Role Data :', response);
      response.roles.forEach(role => {
        role.name = role.name.replace('_', ' ').toUpperCase();
        this.roles.push(role);
      });
      this.source.load(this.roles);
    });
  }

  onCreateConfirm(event): void {
    console.log('Create :', event);
    Swal.fire({
      title: 'Are you sure?',
      text: 'Create role {0}'.replace('{0}', event.newData.name),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {

      } else if (result.dismiss === Swal.DismissReason.cancel) {

      }
    });
  }

  onEditConfirm(event): void {
    console.log('Edit', event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event): void {
    console.log('Delete', event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onUserRowSelect(event): void {
    console.log(event);
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}
