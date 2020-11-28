import {Component, OnInit} from '@angular/core';
import {Employee, EmployeeControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-employee-main',
  templateUrl: './employee-main.component.html',
  styleUrls: ['./employee-main.component.scss']
})
export class EmployeeMainComponent implements OnInit {

  offset = 0;
  limit = 100;

  employees: Array<Employee> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      code: {
        title: 'Employee Code',
        type: 'string',
      },
      nametitle: {
        title: 'Title',
        type: 'string',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      gender: {
        title: 'Gender',
        type: 'string',
      },
      designation: {
        title: 'Designation',
        type: 'string',
      },
      dobirth: {
        title: 'Date of Birth',
        type: 'string',
      },
      nic: {
        title: 'NIC',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      mobile: {
        title: 'Mobile',
        type: 'string',
      },
      land: {
        title: 'Land',
        type: 'string',
      },
      civilstatus: {
        title: 'Civil Status',
        type: 'string',
      },
      dorecruite: {
        title: 'Recruited Date',
        type: 'string',
      },
      statusDescription: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private employeeControllerService: EmployeeControllerService,
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
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeControllerService.getAllEmployeesUsingGET(this.offset, this.limit).subscribe(response => {
      console.log('Employee Data :', response);
      response.employees.forEach(employee => {
        employee.statusDescription = ServiceUtil.getStatusDescription(employee.status);
        this.employees.push(employee);
      });
      this.source.load(this.employees);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/employee/view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}
