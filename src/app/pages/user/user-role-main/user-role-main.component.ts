import {Component, OnInit} from '@angular/core';
import {Role, RoleControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-user-role-main',
  templateUrl: './user-role-main.component.html',
  styleUrls: ['./user-role-main.component.scss']
})
export class UserRoleMainComponent implements OnInit {

  roles: Array<Role> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      statusDescription: {
        title: 'Status',
        type: 'string',
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
        role.statusDescription = ServiceUtil.getStatusDescription(role.status);
        role.name = role.name.replace('_', ' ').toUpperCase();
        this.roles.push(role);
      });
      this.source.load(this.roles);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}
