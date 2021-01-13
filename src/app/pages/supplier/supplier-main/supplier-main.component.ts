import {Component, OnInit} from '@angular/core';
import {Supplier, SupplierControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-supplier-main',
  templateUrl: './supplier-main.component.html',
  styleUrls: ['./supplier-main.component.scss']
})
export class SupplierMainComponent implements OnInit {

  suppliers: Array<Supplier> = [];

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
      purchaseOrderCount: {
        title: 'Purchase Orders',
        type: 'number',
        addable: false,
        editable: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private supplierControllerService: SupplierControllerService,
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
    this.fetchSuppliers();
  }

  fetchSuppliers() {
    this.supplierControllerService.getAllSuppliersUsingGET().subscribe(response => {
      console.log('Supplier Data :', response);
      response.supplierList.forEach(supplier => {
        supplier.statusDescription = ServiceUtil.getStatusDescription(supplier.status);
        supplier.purchaseOrderCount = supplier.purchaseOrderList.length;
        this.suppliers.push(supplier);
      });
      this.source.load(this.suppliers);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/supplier/view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}
