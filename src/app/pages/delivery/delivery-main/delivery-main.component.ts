import {Component, OnInit} from '@angular/core';
import {Delivery, DeliveryControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-delivery-main',
  templateUrl: './delivery-main.component.html',
  styleUrls: ['./delivery-main.component.scss']
})
export class DeliveryMainComponent implements OnInit {

  deliveries: Array<Delivery> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
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

  constructor(private deliveryControllerService: DeliveryControllerService,
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
    this.fetchDeliveries();
  }

  fetchDeliveries() {
    this.deliveryControllerService.getAllDeliveriesUsingGET().subscribe(response => {
      console.log('Delivery Data :', response);
      response.deliveryList.forEach(delivery => {
        delivery.statusDescription = ServiceUtil.getStatusDescription(delivery.status);
        this.deliveries.push(delivery);
      });
      this.source.load(this.deliveries);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/delivery/view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}

