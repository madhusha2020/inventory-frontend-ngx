import {Component, OnInit} from '@angular/core';
import {SupplierRefund, SupplierRefundControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-grn-refund',
  templateUrl: './grn-refund.component.html',
  styleUrls: ['./grn-refund.component.scss']
})
export class GrnRefundComponent implements OnInit {

  offset = 0;
  limit = 100;

  refundList: Array<SupplierRefund> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      id: {
        title: 'Refund#',
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
      refundTotal: {
        title: 'Refund Total',
        type: 'string',
      },
      refundItemCount: {
        title: 'Item Count',
        type: 'number',
      },
      statusDescription: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private supplierRefundControllerService: SupplierRefundControllerService,
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
    this.fetchRefunds();
  }

  fetchRefunds() {
    this.supplierRefundControllerService.getAllSupplierRefundsUsingGET().subscribe(response => {
      console.log('Refund List Data :', response);
      response.supplierRefunds.forEach(refund => {
        refund.refundTotal = refund.amount.toLocaleString('en-US', {style: 'currency', currency: 'LKR'});
        refund.refundItemCount = refund.supplierRefundInventories.length;
        refund.statusDescription = ServiceUtil.getStatusDescription(refund.status);
        this.refundList.push(refund);
      });
      this.source.load(this.refundList);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/grn/refund-view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}
