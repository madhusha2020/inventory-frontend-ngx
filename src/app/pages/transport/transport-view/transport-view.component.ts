import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {TokenService} from '../../../service/auth/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import {
  Vehicle,
  VehicleControllerService,
  VehicleFacility,
  VehicleFacilityList,
  VehicleType
} from '../../../service/rest';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-transport-view',
  templateUrl: './transport-view.component.html',
  styleUrls: ['./transport-view.component.scss']
})
export class TransportViewComponent implements OnInit {

  editMode: boolean;
  disabledProperty = 'disabled';
  title: string;

  transportForm: FormGroup;

  vehicle: Vehicle = {};
  vehicleType: VehicleType = {};
  vehicleFacilities: Array<VehicleFacility> = [];
  vehicleFacilityList: VehicleFacilityList = {};

  constructor(private formBuilder: FormBuilder,
              private vehicleControllerService: VehicleControllerService,
              private tokenService: TokenService,
              private route: ActivatedRoute,
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
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.vehicle.id = params.id;
          this.fetchVehicle(params.id);
        } else {
          Swal.fire('Error', 'Transport not found', 'error');
        }
      }
    );

    this.transportForm = this.formBuilder.group({
      no: [null, [Validators.required]],
      brand: [null, [Validators.required]],
      modal: [null, [Validators.required]],
      type: [null, [Validators.required]],
    });
  }

  fetchVehicle(id: string) {
    this.vehicleControllerService.getVehicleUsingGET(id).subscribe(response => {
      console.log('Vehicle response ', response);
      this.vehicle = response;
      this.setData();
    });
  }

  setData() {
    this.no.setValue(this.vehicle.no);
    this.brand.setValue(this.vehicle.brand);
    this.modal.setValue(this.vehicle.modal);
    this.type.setValue(this.vehicle.type);
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

  enableEditMode() {
    this.editMode = true;
    this.disabledProperty = null;
    this.title = 'Edit';
    this.type.setValue(null);
  }

  disabledEditMode() {
    this.editMode = false;
    this.disabledProperty = 'disabled';
    this.title = null;
    this.setData();
  }

  suspend() {
    console.log('Suspend vehicle');
    Swal.fire({
      title: 'Are you sure?',
      text: 'Suspend transport : {0}'.replace('{0}', this.vehicle.no),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.vehicleControllerService.suspendVehicleUsingPUT({
          id: this.vehicle.id,
          userId: this.tokenService.getUserName()
        }).subscribe(response => {
          console.log('Suspend vehicle :', response);
          Swal.fire('Success', 'Transport suspend successfully', 'success').then(ok => {
            this.router.navigate(['/pages/transport/main']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }

  activate() {
    console.log('Activate vehicle');
    Swal.fire({
      title: 'Are you sure?',
      text: 'Activate transport : {0}'.replace('{0}', this.vehicle.no),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.vehicleControllerService.activateVehicleUsingPUT({
          id: this.vehicle.id,
          userId: this.tokenService.getUserName()
        }).subscribe(response => {
          console.log('Activate vehicle :', response);
          Swal.fire('Success', 'Transport activate successfully', 'success').then(ok => {
            this.router.navigate(['/pages/transport/main']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }

  updateVehicleDetails() {
    this.vehicle.no = this.no.value;
    this.vehicle.brand = this.brand.value;
    this.vehicle.modal = this.modal.value;
    this.vehicle.userId = this.tokenService.getUserName();

    this.vehicleFacilityList.vehicle = this.vehicle;
    this.vehicleFacilityList.vehicle.vehicleType = this.vehicleType;
    this.vehicleFacilityList.vehicleType = this.vehicleType;
    this.vehicleFacilityList.vehicleFacilityList = this.vehicleFacilities;

    console.log('Vehicle Facility List details :', this.vehicleFacilityList);

    Swal.fire({
      title: 'Are you sure?',
      text: 'Update transport : {0}'.replace('{0}', this.vehicle.no),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.vehicleControllerService.updateVehicleUsingPUT(this.vehicleFacilityList).subscribe(response => {
          console.log('Vehicle response :', response);
          Swal.fire('Success', 'Transport successfully updated', 'success').then(value => {
            this.router.navigate(['/pages/transport/main']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }
}
