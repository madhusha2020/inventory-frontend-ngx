import {Component, OnInit} from '@angular/core';
import {User, UserControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';

@Component({
  selector: 'ngx-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.scss']
})
export class UserMainComponent implements OnInit {

  users: Array<User> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      userName: {
        title: 'User Name',
        type: 'string',
      },
      statusDescription: {
        title: 'Status',
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
        if (user.status == 1) {
          user.statusDescription = 'Active';
        } else {
          user.statusDescription = 'Inactive';
        }
        this.users.push(user);
      });
      this.source.load(this.users);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}

