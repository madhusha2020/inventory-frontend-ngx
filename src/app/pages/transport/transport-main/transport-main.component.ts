import {Component, OnInit} from '@angular/core';
import {Vehicle, VehicleControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-transport-main',
  templateUrl: './transport-main.component.html',
  styleUrls: ['./transport-main.component.scss']
})
export class TransportMainComponent implements OnInit {

  vehicles: Array<Vehicle> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      id: {
        title: 'Vehicle#',
        type: 'number',
      },
      no: {
        title: 'Vehicle No',
        type: 'string',
      },
      brand: {
        title: 'Vehicle Brand',
        type: 'string',
      },
      type: {
        title: 'Vehicle Type',
        type: 'string',
      },
      statusDescription: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private vehicleControllerService: VehicleControllerService,
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
    this.fetchVehicles();
  }

  fetchVehicles() {
    this.vehicleControllerService.getAllVehiclesUsingGET().subscribe(response => {
      console.log('Vehicle Data :', response);
      response.vehicleList.forEach(vehicle => {
        vehicle.statusDescription = ServiceUtil.getStatusDescription(vehicle.status);
        this.vehicles.push(vehicle);
      });
      this.source.load(this.vehicles);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/transport/view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}
