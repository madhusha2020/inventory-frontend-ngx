import { Component, OnInit } from '@angular/core';
import {User, UserControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.scss']
})
export class UserMainComponent implements OnInit {

  users: Array<User> = [];

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
      userName: {
        title: 'User Name',
        type: 'string',
        addable: false,
        editable: false,
      },
      status: {
        title: 'Status',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              {value: '1', title: 'Active'},
              {value: '10', title: 'Suspend'},
            ],
          },
        },
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private userControllerService: UserControllerService,
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
    this.fetchUsers();
  }

  fetchUsers() {
    this.userControllerService.getAllUsersUsingGET().subscribe(response => {
      console.log('User Data :', response);
      response.userList.forEach(user => {
        this.users.push(user);
      });
      this.source.load(this.users);
    });
  }

  onCreateConfirm(event): void {
    console.log('Create :', event);
    Swal.fire({
      title: 'Are you sure?',
      text: 'Create user {0}'.replace('{0}', event.newData.name),
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

