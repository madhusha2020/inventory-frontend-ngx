import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  Delivery,
  DeliveryControllerService,
  Vehicle,
  VehicleControllerService,
  VehicleFacility,
  VehicleFacilityList,
  VehicleType
} from '../../../service/rest';
import {TokenService} from '../../../service/auth/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-delivery-update',
  templateUrl: './delivery-update.component.html',
  styleUrls: ['./delivery-update.component.scss']
})
export class DeliveryUpdateComponent implements OnInit {

  delivery: Delivery = {};
  vehicleForm: FormGroup;

  vehicleFacilityList: VehicleFacilityList = {};
  vehicle: Vehicle = {};
  facilityList?: Array<VehicleFacility> = [];
  vehicleType?: VehicleType = {};

  constructor(private formBuilder: FormBuilder,
              private deliveryControllerService: DeliveryControllerService,
              private vehicleControllerService: VehicleControllerService,
              private tokenService: TokenService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  get deliveryId() {
    return this.vehicleForm.get('deliveryId');
  }

  get deliveryAddress() {
    return this.vehicleForm.get('deliveryAddress');
  }

  get deliveryContact() {
    return this.vehicleForm.get('deliveryContact');
  }

  get deliveryContactName() {
    return this.vehicleForm.get('deliveryContactName');
  }

  get employeeId() {
    return this.vehicleForm.get('employeeId');
  }

  get vehicleId() {
    return this.vehicleForm.get('vehicleId');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.fetchDelivery(params.id);
        } else {
          Swal.fire('Error', 'Delivery not found', 'error');
        }
      }
    );

    this.vehicleForm = this.formBuilder.group({
      deliveryId: [null, [Validators.required]],
      deliveryAddress: [null, [Validators.required]],
      deliveryContact: [null, [Validators.required]],
      deliveryContactName: [null, [Validators.required]],
      employeeId: [null, [Validators.required]],
      vehicleId: [null, [Validators.required]],
    });
  }

  fetchDelivery(id: string) {
    this.deliveryControllerService.getDeliveryByIdUsingGET(id).subscribe(response => {
      console.log('Delivery Data :', response);
      this.delivery = response;
      this.setData();
    });
  }

  setData() {
    this.deliveryId.setValue(this.delivery.id);
    this.deliveryAddress.setValue(this.delivery.deliveryaddress);
    this.deliveryContactName.setValue(this.delivery.deliverycontactname);
    this.deliveryContact.setValue(this.delivery.deliverycontactno);
    this.employeeId.setValue(this.delivery.deliveryempname);
    this.vehicleId.setValue(this.delivery.deliveryvehicleno);
  }

  approve() {

  }

  suspend() {

  }
}
