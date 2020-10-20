import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { CustomerControllerService } from '../../../service/rest';
import { NbSearchService } from '@nebular/theme';
let CustomerMainComponent = class CustomerMainComponent {
    constructor(customerControllerService, searchService) {
        this.customerControllerService = customerControllerService;
        this.searchService = searchService;
        this.offset = 0;
        this.limit = 100;
        this.loading = true;
        this.customers = [];
        this.settings = {
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
                                { value: 'New', title: 'New' },
                                { value: 'Regular', title: 'Regular' },
                                { value: 'Loyalty', title: 'Loyalty' },
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
                                { value: '1', title: 'Active' },
                                { value: '10', title: 'Suspend' },
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
        this.source = new LocalDataSource();
        this.searchService.onSearchSubmit()
            .subscribe((data) => {
            console.log('Search', data.term);
            this.source.setFilter([
                {
                    field: 'name',
                    search: data.term
                }
            ], false);
        });
    }
    ngOnInit() {
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
    onCreateConfirm(event) {
        console.log('Create', event);
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    }
    onEditConfirm(event) {
        console.log('Edit', event);
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    }
    onDeleteConfirm(event) {
        console.log('Delete', event);
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    }
    onUserRowSelect(event) {
        console.log(event);
    }
    resetFilter() {
        this.source.setFilter([]);
    }
};
CustomerMainComponent = __decorate([
    Component({
        selector: 'ngx-customer-main',
        templateUrl: './customer-main.component.html',
        styleUrls: ['./customer-main.component.scss'],
    }),
    __metadata("design:paramtypes", [CustomerControllerService,
        NbSearchService])
], CustomerMainComponent);
export { CustomerMainComponent };
//# sourceMappingURL=customer-main.component.js.map