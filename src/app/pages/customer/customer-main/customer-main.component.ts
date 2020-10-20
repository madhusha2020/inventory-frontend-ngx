import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {Customer, CustomerControllerService} from '../../../service/rest';
import {NbSearchService} from '@nebular/theme';

@Component({
  selector: 'ngx-customer-main',
  templateUrl: './customer-main.component.html',
  styleUrls: ['./customer-main.component.scss'],
})
export class CustomerMainComponent implements OnInit {

  offset = 0;
  limit = 100;
  loading = true;

  customers: Array<Customer> = [];

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
      id: {
        title: 'ID',
        type: 'number',
        addable: false,
        editable: false,
      },
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
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              {value: 'New', title: 'New'},
              {value: 'Regular', title: 'Regular'},
              {value: 'Loyalty', title: 'Loyalty'},
            ],
          },
        },
        type: 'string',
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
    this.fetchData();
  }

  fetchData() {
    this.loading = true;
    this.customerControllerService.getAllCustomersUsingGET(this.offset, this.limit).subscribe(response => {
      console.log('Customer Data :', response);
      response.customers.forEach(customer => {
        this.loading = false;
        customer.orderCount = customer.orders.length;
        this.customers.push(customer);
      });
      this.source.load(this.customers);
    });
  }

  onCreateConfirm(event): void {
    console.log('Create', event);
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
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
