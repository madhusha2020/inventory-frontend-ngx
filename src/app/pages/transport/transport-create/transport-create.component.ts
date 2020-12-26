import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  Vehicle,
  VehicleControllerService,
  VehicleFacility,
  VehicleFacilityList,
  VehicleType
} from '../../../service/rest';
import {TokenService} from '../../../service/auth/token.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-transport-create',
  templateUrl: './transport-create.component.html',
  styleUrls: ['./transport-create.component.scss']
})
export class TransportCreateComponent implements OnInit {

  transportForm: FormGroup;

  vehicle: Vehicle = {};
  vehicleType: VehicleType = {};
  vehicleFacilities: Array<VehicleFacility> = [];
  vehicleFacilityList: VehicleFacilityList = {};

  constructor(private formBuilder: FormBuilder,
              private vehicleControllerService: VehicleControllerService,
              private tokenService: TokenService,
              private router: Router) {
  }

  get no() {
    return this.transportForm.get('no');
  }

  get brand() {
    return this.transportForm.get('brand');
  }

  get modal() {
    return this.transportForm.get('modal');
  }

  get type() {
    return this.transportForm.get('type');
  }

  ngOnInit(): void {
    this.transportForm = this.formBuilder.group({
      no: [null, [Validators.required]],
      brand: [null, [Validators.required]],
      modal: [null, [Validators.required]],
      type: [null, [Validators.required]],
    });
  }

  vehicleTypeStateChange(event) {
    console.log('Vehicle Type :', event);
    this.vehicleType.id = event;
  }

  facilityStateChange(event) {
    this.vehicleFacilities = [];
    console.log('Vehicle facilities array :', event);
    event.forEach(facility => {
      this.vehicleFacilities.push({id: facility});
    });
  }

  submit() {
    this.vehicle.no = this.no.value;
    this.vehicle.brand = this.brand.value;
    this.vehicle.modal = this.modal.value;
    this.vehicle.userId = this.tokenService.getUserName();

    this.vehicleFacilityList.vehicle = this.vehicle;
    this.vehicleFacilityList.vehicle.vehicleType = this.vehicleType;
    this.vehicleFacilityList.vehicleType = this.vehicleType;
    this.vehicleFacilityList.vehicleFacilityList = this.vehicleFacilities;

    console.log('Vehicle Facility List details :', this.vehicleFacilityList);

    this.vehicleControllerService.saveVehicleUsingPOST(this.vehicleFacilityList).subscribe(response => {
      console.log('Vehicle response :', response);
      Swal.fire('Success', 'Transport successfully created', 'success').then(value => {
        this.router.navigate(['/pages/transport/main']);
      });
    });
  }
}
