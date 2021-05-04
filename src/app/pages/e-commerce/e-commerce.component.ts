import {Component, OnInit} from '@angular/core';
import {NbColorHelper, NbDateService} from '@nebular/theme';
import {Purchase, ReportControllerService, Sale} from '../../service/rest';
import {ServiceUtil} from '../../service/util/service-util';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent implements OnInit {

  date: Date;
  minDate: Date;
  maxDate: Date;

  saleData: any;
  saleDataMap: Map<string, number> = new Map<string, number>();
  saleList: Array<Sale> = [];

  purchaseData: any;
  purchaseDataMap: Map<string, number> = new Map<string, number>();
  purchaseList: Array<Purchase> = [];

  constructor(protected dateService: NbDateService<Date>,
              private reportControllerService: ReportControllerService) {
  }

  ngOnInit(): void {
    this.date = new Date();
    this.minDate = this.dateService.addDay(this.dateService.today(), -7);
    this.maxDate = this.dateService.today();
    this.sales();
    this.purchase();

    console.log(this.dateService.format(this.minDate, 'yyyy-MM-dd'));
    console.log(this.dateService.format(this.minDate, 'yyyy-MM-dd'));
  }

  sales() {
    this.saleList = [];
    this.reportControllerService.salesReportUsingPOST({
      customerId: 0,
      itemId: 0,
      fromDate: this.dateService.format(this.minDate, 'yyyy-MM-dd'),
      toDate: this.dateService.format(this.maxDate, 'yyyy-MM-dd')
    }).subscribe(response => {
      console.log('Sales :', response);
      response.saleList.forEach(sale => {
        sale.statusDescription = ServiceUtil.getStatusDescription(sale.status);
        sale.totalValue = sale.total.toLocaleString('en-US', {style: 'currency', currency: 'LKR'});
        sale.discountValue = sale.discount.toLocaleString('en-US', {style: 'currency', currency: 'LKR'});
        this.saleList.push(sale);

        if (this.saleDataMap.has(sale.date)) {
          this.saleDataMap.set(sale.date, Number(sale.total) + this.saleDataMap.get(sale.date));
        } else {
          this.saleDataMap.set(sale.date, Number(sale.total));
        }
      });
      console.log('Data map :', this.saleDataMap);
      this.saleData = {
        labels: Array.from(this.saleDataMap.keys()),
        datasets: [
          {
            data: Array.from(this.saleDataMap.values()),
            label: 'Amount',
            backgroundColor: NbColorHelper.hexToRgbA('#8f9bb3', 0.8),
          }],
      };
    });
  }

  purchase() {
    this.purchaseList = [];
    this.reportControllerService.purchaseReportUsingPOST({
      customerId: 0,
      itemId: 0,
      fromDate: this.dateService.format(this.minDate, 'yyyy-MM-dd'),
      toDate: this.dateService.format(this.maxDate, 'yyyy-MM-dd')
    }).subscribe(response => {
      console.log('Purchases :', response);
      response.purchaseList.forEach(purchase => {
        purchase.purchaseTotal = purchase.total.toLocaleString('en-US', {style: 'currency', currency: 'LKR'});
        purchase.purchaseOrderId = purchase.purchaseOrder.id;
        purchase.statusDescription = ServiceUtil.getStatusDescription(purchase.status);
        this.purchaseList.push(purchase);

        if (this.purchaseDataMap.has(purchase.date)) {
          this.purchaseDataMap.set(purchase.date, Number(purchase.total) + this.purchaseDataMap.get(purchase.date));
        } else {
          this.purchaseDataMap.set(purchase.date, Number(purchase.total));
        }
      });
      console.log('Data map :', this.purchaseDataMap);
      this.purchaseData = {
        labels: Array.from(this.purchaseDataMap.keys()),
        datasets: [
          {
            data: Array.from(this.purchaseDataMap.values()),
            label: 'Amount',
            backgroundColor: NbColorHelper.hexToRgbA('#8f9bb3', 0.8),
          }],
      };
    });
  }
}
