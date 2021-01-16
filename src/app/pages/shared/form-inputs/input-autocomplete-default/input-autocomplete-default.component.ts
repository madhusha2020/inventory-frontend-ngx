import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {
  EmployeeControllerService,
  ItemControllerService,
  SupplierControllerService,
  VehicleControllerService
} from '../../../../service/rest';
import {ServiceUtil} from '../../../../service/util/service-util';

@Component({
  selector: 'app-input-autocomplete-default',
  templateUrl: './input-autocomplete-default.component.html',
  styleUrls: ['./input-autocomplete-default.component.scss']
})
export class InputAutocompleteDefaultComponent implements OnInit {

  @Input() category: string;
  @Input() type: string;
  @Input() title: string;
  @Input() placeholder: string;
  @Input() field: AbstractControl;
  @Input() disableProperty: string = null;
  @Output() changeEvent = new EventEmitter<any>();

  offset = 0;
  limit = 100;

  filteredControlOptions$: Observable<string[]>;
  options: Array<string> = [];

  constructor(private itemControllerService: ItemControllerService,
              private vehicleControllerService: VehicleControllerService,
              private employeeControllerService: EmployeeControllerService,
              private supplierControllerService: SupplierControllerService) {
  }

  ngOnInit() {

    switch (this.category) {

      case 'item':
        this.itemControllerService.getAllActiveItemsUsingGET(this.offset, this.limit).subscribe(response => {
          console.log('Items :', response);
          response.itemList.forEach(value => {
            this.options.push(value.id + ' - ' + value.name.toUpperCase());
          });
          this.set();
        });
        break;

      case 'employee':
        this.employeeControllerService.getByEmployeeDesignationUsingGET(ServiceUtil.getDeliveryDesignation(), this.offset, this.limit).subscribe(response => {
          console.log('Delivery employees :', response);
          response.employees.forEach(value => {
            this.options.push(value.id + ' - ' + value.name.toUpperCase());
          });
          this.set();
        });
        break;

      case 'supplier':
        this.supplierControllerService.getAllActiveSuppliersUsingGET().subscribe(response => {
          console.log('Suppliers :', response);
          response.supplierList.forEach(value => {
            this.options.push(value.id + ' - ' + value.name.toUpperCase());
          });
          this.set();
        });
        break;

      case 'vehicle':
        this.vehicleControllerService.getAllActiveVehiclesUsingGET().subscribe(response => {
          console.log('Delivery vehicle :', response);
          response.vehicleList.forEach(value => {
            this.options.push(value.id + ' - ' + value.no.toUpperCase());
          });
          this.set();
        });
        break;

      case 'vehicleType':
        this.vehicleControllerService.getAllActiveVehicleTypesUsingGET().subscribe(response => {
          console.log('Delivery vehicle type :', response);
          response.vehicleTypeList.forEach(value => {
            this.options.push(value.id + ' - ' + value.name.toUpperCase());
          });
          this.set();
        });
        break;

      default:
        console.log('Default case in autocomplete input');
    }

  }

  change(event) {
    let object = event.split(' - ');
    this.changeEvent.emit(object[0]);
  }

  private set() {
    this.filteredControlOptions$ = of(this.options);
    this.filteredControlOptions$ = this.field.valueChanges
      .pipe(
        startWith(''),
        map(filterString => this.filter(filterString)),
      );
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
}
