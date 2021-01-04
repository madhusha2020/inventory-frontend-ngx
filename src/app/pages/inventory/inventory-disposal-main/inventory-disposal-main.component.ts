import {Component, OnInit} from '@angular/core';
import {Disposal, DisposalControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-inventory-disposal-main',
  templateUrl: './inventory-disposal-main.component.html',
  styleUrls: ['./inventory-disposal-main.component.scss']
})
export class InventoryDisposalMainComponent implements OnInit {

  disposalProducts: Array<Disposal> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      id: {
        title: 'Disposal#',
        type: 'number',
      },
      date: {
        title: 'Disposal Date',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      reason: {
        title: 'Reason',
        type: 'string',
      },
      statusDescription: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private disposalControllerService: DisposalControllerService,
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
    this.fetchDisposalProducts();
  }

  fetchDisposalProducts() {
    this.disposalControllerService.getAllDisposalProductsUsingGET().subscribe(response => {
      console.log('Disposal Products Data :', response);
      response.disposalList.forEach(disposalProduct => {
        disposalProduct.statusDescription = ServiceUtil.getStatusDescription(disposalProduct.status);
        this.disposalProducts.push(disposalProduct);
      });
      this.source.load(this.disposalProducts);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/inventory/disposal-view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}
