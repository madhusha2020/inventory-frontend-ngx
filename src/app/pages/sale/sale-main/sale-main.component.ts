import { Component, OnInit } from '@angular/core';
import {Sale, SaleControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {TokenService} from '../../../service/auth/token.service';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-sale-main',
  templateUrl: './sale-main.component.html',
  styleUrls: ['./sale-main.component.scss']
})
export class SaleMainComponent implements OnInit {

  offset = 0;
  limit = 100;

  saleList: Array<Sale> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      id: {
        title: 'Sale#',
        type: 'number',
      },
      date: {
        title: 'Sale Date',
        type: 'string',
      },
      name: {
        title: 'Customer Name',
        type: 'string',
      },
      deliveryaddress: {
        title: 'Delivery Address',
        type: 'string',
      },
      totalValue: {
        title: 'Total Amount',
        type: 'string',
      },
      discountValue: {
        title: 'Discount',
        type: 'string',
      },
      contact1: {
        title: 'Contact',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      statusDescription: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private saleControllerService: SaleControllerService,
              private searchService: NbSearchService,
              private tokenService: TokenService,
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
    this.fetchCustomerSale();
  }

  fetchCustomerSale() {
    this.saleControllerService.getAllSalesUsingGET().subscribe(response => {
      console.log('All Sales Data :', response);
      response.saleList.forEach(sale => {
        sale.statusDescription = ServiceUtil.getStatusDescription(sale.status);
        sale.totalValue = sale.total.toLocaleString('en-US', {style: 'currency', currency: 'LKR'});
        sale.discountValue = sale.discount.toLocaleString('en-US', {style: 'currency', currency: 'LKR'});
        this.saleList.push(sale);
      });
      this.source.load(this.saleList);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/sale/view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}
