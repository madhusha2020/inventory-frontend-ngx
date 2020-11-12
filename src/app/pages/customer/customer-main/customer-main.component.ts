import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {Customer, CustomerControllerService} from '../../../service/rest';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-customer-main',
  templateUrl: './customer-main.component.html',
  styleUrls: ['./customer-main.component.scss'],
})
export class CustomerMainComponent implements OnInit {

  offset = 0;
  limit = 100;

  customers: Array<Customer> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      contact1: {
        title: 'Contact 01',
        type: 'string',
      },
      contact2: {
        title: 'Contact 02',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      fax: {
        title: 'Fax',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
      statusDescription: {
        title: 'Status',
        type: 'string',
      },
      orderCount: {
        title: '#Orders',
        type: 'number',
        addable: false,
        editable: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private customerControllerService: CustomerControllerService,
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
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.customerControllerService.getAllCustomersUsingGET(this.offset, this.limit).subscribe(response => {
      console.log('Customer Data :', response);
      response.customers.forEach(customer => {
        if (customer.status == 1) {
          customer.statusDescription = 'Active';
        } else {
          customer.statusDescription = 'Inactive';
        }
        customer.orderCount = customer.orders.length;
        this.customers.push(customer);
      });
      this.source.load(this.customers);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/customer/view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}
