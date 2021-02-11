import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Order, ReportControllerService, ReportRequest} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {ServiceUtil} from '../../../service/util/service-util';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-orders-report',
  templateUrl: './orders-report.component.html',
  styleUrls: ['./orders-report.component.scss']
})
export class OrdersReportComponent implements OnInit {

  reportForm: FormGroup;
  reportRequest: ReportRequest = {};

  customerID = 0;
  orderList: Array<Order> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    pager: {
      display: true,
      perPage: 7
    },
    columns: {
      id: {
        title: 'Order#',
        type: 'number',
      },
      doordered: {
        title: 'Order Date',
        type: 'string',
      },
      saleId: {
        title: 'Sale#',
        type: 'number',
      },
      dosold: {
        title: 'Sold Date',
        type: 'string',
      },
      name: {
        title: 'Customer Name',
        type: 'string',
      },
      address: {
        title: 'Address',
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
      type: {
        title: 'Type',
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

  get fromDate() {
    return this.reportForm.get('fromDate');
  }

  get toDate() {
    return this.reportForm.get('toDate');
  }

  ngOnInit(): void {
    this.reportForm = this.formBuilder.group({
      customerId: [null],
      fromDate: [null, [Validators.required]],
      toDate: [null, [Validators.required]],
    });
  }

  customerStateChange(event) {
    console.log('Customer state change : ', event);
    this.customerID = event;
  }

  generate() {
    this.orderList = [];
    this.reportControllerService.orderReportUsingPOST({
      supplierId: this.customerID,
      fromDate: this.fromDate.value,
      toDate: this.toDate.value
    }).subscribe(response => {
      console.log('Orders :', response);
      response.orderList.forEach(order => {
        order.statusDescription = ServiceUtil.getStatusDescription(order.status);
        order.saleId = order.sale.id;
        this.orderList.push(order);
      });
      this.source.load(this.orderList);
    });
  }

  downloadCSV() {
    if (this.orderList.length > 0) {
      const options = {
        fieldSeparator: ',',
        quoteStrings: '',
        decimalseparator: '.',
        showLabels: true,
        showTitle: true,
        useBom: true,
        title: 'Order Report',
        headers: [
          'Order#',
          'Order Date',
          'Sale#',
          'Sold Date',
          'Customer Name',
          'Address',
          'Contact',
          'E-mail',
          'Type',
          'Status',
        ],
      };

      let orders: Array<OrderReport> = [];
      this.orderList.forEach(order => {
        orders.push({
          orderId: order.id,
          orderDate: order.doordered,
          saleId: order.saleId,
          soldDate: order.dosold,
          customerName: order.name,
          address: order.address,
          contact: order.contact1,
          email: order.email,
          type: order.type,
          status: order.statusDescription
        });
      });

      new Angular5Csv(orders, 'order-report', options);
    } else {
      Swal.fire('Error', 'Please generate report first', 'error');
    }
  }
}

interface OrderReport {
  orderId: number;
  orderDate: string;
  saleId: number;
  soldDate: string;
  customerName: string;
  address: string;
  contact: string;
  email: string;
  type: string;
  status: string;
}
