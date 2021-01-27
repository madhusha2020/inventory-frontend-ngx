import {Component, OnInit} from '@angular/core';
import {SupplierReturn, SupplierReturnControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-grn-return',
  templateUrl: './grn-return.component.html',
  styleUrls: ['./grn-return.component.scss']
})
export class GrnReturnComponent implements OnInit {

  offset = 0;
  limit = 100;

  returnList: Array<SupplierReturn> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      id: {
        title: 'Return#',
        type: 'number',
      },
      code: {
        title: 'Code',
        type: 'string',
      },
      reason: {
        title: 'Reason',
        type: 'string',
      },
      dorecived: {
        title: 'Received Date',
        type: 'string',
      },
      doreturned: {
        title: 'Returned Date',
        type: 'string',
      },
      statusDescription: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private supplierReturnControllerService: SupplierReturnControllerService,
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
    this.fetchReturns();
  }

  fetchReturns() {
    this.supplierReturnControllerService.getAllSupplierReturnsUsingGET().subscribe(response => {
      console.log('Return List Data :', response);
      response.supplierReturnList.forEach(returns => {
        returns.statusDescription = ServiceUtil.getStatusDescription(returns.status);
        this.returnList.push(returns);
      });
      this.source.load(this.returnList);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/grn/return-view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}

