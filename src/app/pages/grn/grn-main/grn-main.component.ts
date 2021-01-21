import {Component, OnInit} from '@angular/core';
import {Purchase, PurchaseControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-grn-main',
  templateUrl: './grn-main.component.html',
  styleUrls: ['./grn-main.component.scss']
})
export class GrnMainComponent implements OnInit {

  offset = 0;
  limit = 100;

  purchaseLists: Array<Purchase> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      id: {
        title: 'Purchase#',
        type: 'number',
      },
      purchaseOrderId: {
        title: 'Purchase Order#',
        type: 'number',
      },
      code: {
        title: 'Code',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      date: {
        title: 'Date',
        type: 'string',
      },
      purchaseTotal: {
        title: 'Purchase Total',
        type: 'string',
      },
      statusDescription: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private purchaseControllerService: PurchaseControllerService,
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
    this.fetchGRNs();
  }

  fetchGRNs() {
    this.purchaseControllerService.getAllPurchasesUsingGET().subscribe(response => {
      console.log('Purchase List Data :', response);
      response.purchaseList.forEach(purchase => {
        purchase.purchaseTotal = purchase.total.toLocaleString('en-US', {style: 'currency', currency: 'LKR'});
        purchase.purchaseOrderId = purchase.purchaseOrder.id;
        purchase.statusDescription = ServiceUtil.getStatusDescription(purchase.status);
        this.purchaseLists.push(purchase);
      });
      this.source.load(this.purchaseLists);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/grn/view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}
