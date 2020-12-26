import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VehicleControllerService} from '../../../../service/rest';

@Component({
  selector: 'app-input-multiple-default',
  templateUrl: './input-multiple-default.component.html',
  styleUrls: ['./input-multiple-default.component.scss']
})
export class InputMultipleDefaultComponent implements OnInit {

  @Input() category: string;
  @Input() title: string;
  @Input() placeholder: string;
  @Output() changeEvent = new EventEmitter<any>();

  options: Array<string> = [];
  selectedOptions: Array<string> = [];

  constructor(private vehicleControllerService: VehicleControllerService) {
  }

  ngOnInit() {

    switch (this.category) {

      case 'vehicleFacility':
        this.vehicleControllerService.getAllVehicleFacilitiesUsingGET().subscribe(response => {
          console.log('Delivery vehicle facility :', response);
          response.vehicleFacilityList.forEach(value => {
            this.options.push(value.id + ' - ' + value.name.toUpperCase());
          });
        });
        break;

      default:
        console.log('Default case in autocomplete input');
    }
  }

  change(event) {
    this.selectedOptions = [];
    event.forEach(facility => {
      let object = facility.split(' - ');
      this.selectedOptions.push(object[0]);
    });
    console.log('Multiple Selections :', this.selectedOptions);
    this.changeEvent.emit(this.selectedOptions);
  }
}
