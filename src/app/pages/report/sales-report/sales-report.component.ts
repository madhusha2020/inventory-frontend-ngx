import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReportControllerService, ReportRequest, Sale} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import Swal from 'sweetalert2';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.scss']
})
export class SalesReportComponent implements OnInit {

  reportForm: FormGroup;
  reportRequest: ReportRequest = {};

  customerID = 0;
  itemID = 0;
  saleList: Array<Sale> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    pager: {
      display: true,
      perPage: 7
    },
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

  constructor(private formBuilder: FormBuilder,
              private reportControllerService: ReportControllerService) {
  }

  get customerId() {
    return this.reportForm.get('customerId');
  }

  get itemId() {
    return this.reportForm.get('itemId');
  }

  get fromDate() {
    return this.reportForm.get('fromDate');
  }

  get toDate() {
    return this.reportForm.get('toDate');
  }

  ngOnInit(): void {
    this.reportForm = this.formBuilder.group({
      customerId: [null],
      itemId: [null],
      fromDate: [null, [Validators.required]],
      toDate: [null, [Validators.required]],
    });
  }

  customerStateChange(event) {
    console.log('Customer state change : ', event);
    this.customerID = event;
  }

  itemStateChange(event) {
    console.log('Item state change : ', event);
    this.itemID = event;
  }

  generate() {
    this.saleList = [];
    this.reportControllerService.salesReportUsingPOST({
      customerId: this.customerID,
      itemId: this.itemID,
      fromDate: this.fromDate.value,
      toDate: this.toDate.value
    }).subscribe(response => {
      console.log('Sales :', response);
      response.saleList.forEach(sale => {
        sale.statusDescription = ServiceUtil.getStatusDescription(sale.status);
        sale.totalValue = sale.total.toLocaleString('en-US', {style: 'currency', currency: 'LKR'});
        sale.discountValue = sale.discount.toLocaleString('en-US', {style: 'currency', currency: 'LKR'});
        this.saleList.push(sale);
      });
      this.source.load(this.saleList);
    });
  }

  downloadCSV() {
    if (this.saleList.length > 0) {
      const options = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        showTitle: true,
        useBom: true,
        title: 'Sales Report',
        headers: [
          'Sale#',
          'Sale Date',
          'Customer Name',
          'Delivery Address',
          'Total Amount',
          'Discount',
          'Contact',
          'E-mail',
          'Status',
        ],
      };

      let sales: Array<SaleReport> = [];
      this.saleList.forEach(sale => {
        sales.push({
          saleId: sale.id,
          saleDate: sale.date,
          customerName: sale.name,
          deliveryAddress: sale.deliveryaddress,
          totalAmount: sale.totalValue,
          discount: sale.discountValue,
          contact: sale.contact1,
          email: sale.email,
          status: sale.statusDescription
        });
      });

      new Angular5Csv(sales, 'sale-report', options);
    } else {
      Swal.fire('Error', 'Please generate report first', 'error');
    }
  }
}

interface SaleReport {
  saleId: number;
  saleDate: string;
  customerName: string;
  deliveryAddress: string;
  totalAmount: string;
  discount: string;
  contact: string;
  email: string;
  status: string;
}
