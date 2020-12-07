import {Component, OnInit} from '@angular/core';
import {User, UserControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {ServiceUtil} from '../../../service/util/service-util';
import {Router} from '@angular/router';

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
              private searchService: NbSearchService,
              private router: Router) {

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
        user.statusDescription = ServiceUtil.getStatusDescription(user.status);
        this.users.push(user);
      });
      this.source.load(this.users);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/user/view'], {queryParams: {id: event.data.userName}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}

