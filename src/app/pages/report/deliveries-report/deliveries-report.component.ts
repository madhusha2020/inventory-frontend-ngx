import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Delivery, ReportControllerService, ReportRequest, Sale} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {ServiceUtil} from '../../../service/util/service-util';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-deliveries-report',
  templateUrl: './deliveries-report.component.html',
  styleUrls: ['./deliveries-report.component.scss']
})
export class DeliveriesReportComponent implements OnInit {

  reportForm: FormGroup;
  reportRequest: ReportRequest = {};

  employeeID = 0;
  vehicleID = 0;
  deliveryList: Array<Delivery> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    pager: {
      display: true,
      perPage: 7
    },
    columns: {
      id: {
        title: 'Delivery#',
        type: 'number',
      },
      date: {
        title: 'Date',
        type: 'string',
      },
      deliveryaddress: {
        title: 'Address',
        type: 'string',
      },
      deliverycontactname: {
        title: 'Contact Name',
        type: 'string',
      },
      deliverycontactno: {
        title: 'Contact No',
        type: 'string',
      },
      deliveryempname: {
        title: 'Employee Name',
        type: 'string',
      },
      deliveryempcontactno: {
        title: 'Employee Contact No',
        type: 'string',
      },
      deliveryvehicletype: {
        title: 'Vehicle Type',
        type: 'string',
      },
      deliveryvehicleno: {
        title: 'Vehicle No',
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

  get employeeId() {
    return this.reportForm.get('employeeId');
  }

  get vehicleId() {
    return this.reportForm.get('vehicleId');
  }

  get fromDate() {
    return this.reportForm.get('fromDate');
  }

  get toDate() {
    return this.reportForm.get('toDate');
  }

  ngOnInit(): void {
    this.reportForm = this.formBuilder.group({
      employeeId: [null],
      vehicleId: [null],
      fromDate: [null, [Validators.required]],
      toDate: [null, [Validators.required]],
    });
  }

  employeeStateChange(event) {
    console.log('Employee state change : ', event);
    this.employeeID = event;
  }

  vehicleStateChange(event) {
    console.log('Vehicle state change : ', event);
    this.vehicleID = event;
  }

  generate() {
    this.deliveryList = [];
    this.reportControllerService.deliveryReportUsingPOST({
      employeeId: this.employeeID,
      vehicleId: this.vehicleID,
      fromDate: this.fromDate.value,
      toDate: this.toDate.value
    }).subscribe(response => {
      console.log('Deliveries :', response);
      response.deliveryList.forEach(delivery => {
        delivery.statusDescription = ServiceUtil.getStatusDescription(delivery.status);
        this.deliveryList.push(delivery);
      });
      this.source.load(this.deliveryList);
    });
  }

  downloadCSV() {
    if (this.deliveryList.length > 0) {
      const options = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        showTitle: true,
        useBom: true,
        title: 'Delivery Report',
        headers: [
          'Delivery#',
          'Date',
          'Address',
          'Contact Name',
          'Contact No',
          'Employee Name',
          'Employee Contact No',
          'Vehicle Type',
          'Vehicle No',
          'Status',
        ],
      };

      let deliveries: Array<DeliveryReport> = [];
      this.deliveryList.forEach(delivery => {
        deliveries.push({
          deliveryId: delivery.id,
          deliveryDate: delivery.date,
          address: delivery.deliveryaddress,
          contactName: delivery.deliverycontactname,
          contactNo: delivery.deliverycontactno,
          employeeName: delivery.deliveryempname,
          employeeContactNo: delivery.deliveryempcontactno,
          vehicleType: delivery.deliveryvehicletype,
          vehicleNo: delivery.deliveryvehicleno,
          status: delivery.statusDescription
        });
      });

      new Angular5Csv(deliveries, 'delivery-report', options);
    } else {
      Swal.fire('Error', 'Please generate report first', 'error');
    }
  }
}

interface DeliveryReport {
  deliveryId: number;
  deliveryDate: string;
  address: string;
  contactName: string;
  contactNo: string;
  employeeName: string;
  employeeContactNo: string;
  vehicleType: string;
  vehicleNo: string;
  status: string;
}
