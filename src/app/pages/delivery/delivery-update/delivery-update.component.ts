import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Delivery, DeliveryControllerService, VehicleControllerService} from '../../../service/rest';
import {TokenService} from '../../../service/auth/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-delivery-update',
  templateUrl: './delivery-update.component.html',
  styleUrls: ['./delivery-update.component.scss']
})
export class DeliveryUpdateComponent implements OnInit {

  editMode: boolean;
  deliveryForm: FormGroup;
  delivery: Delivery = {};

  constructor(private formBuilder: FormBuilder,
              private deliveryControllerService: DeliveryControllerService,
              private vehicleControllerService: VehicleControllerService,
              private tokenService: TokenService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  get deliveryId() {
    return this.deliveryForm.get('deliveryId');
  }

  get deliveryAddress() {
    return this.deliveryForm.get('deliveryAddress');
  }

  get deliveryContact() {
    return this.deliveryForm.get('deliveryContact');
  }

  get deliveryContactName() {
    return this.deliveryForm.get('deliveryContactName');
  }

  get employeeId() {
    return this.deliveryForm.get('employeeId');
  }

  get vehicleId() {
    return this.deliveryForm.get('vehicleId');
  }

  ngOnInit(): void {
    this.editMode = false;
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.fetchDelivery(params.id);
        } else {
          Swal.fire('Error', 'Delivery not found', 'error');
        }
      }
    );

    this.deliveryForm = this.formBuilder.group({
      deliveryId: [null, [Validators.required]],
      deliveryAddress: [null, [Validators.required]],
      deliveryContact: [null, [Validators.required]],
      deliveryContactName: [null, [Validators.required]],
      employeeId: [null, [Validators.required]],
      vehicleId: [null, [Validators.required]],
    });
  }

  enableEditMode() {
    this.editMode = true;
    this.employeeId.setValue(null);
    this.vehicleId.setValue(null);
  }

  disabledEditMode() {
    this.editMode = false;
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

  employeeStateChange(event) {
    console.log('Employee :', event);
    this.delivery.employeeId = event;
  }

  vehicleStateChange(event) {
    console.log('Vehicle :', event);
    this.delivery.vehicleId = event;
  }

  updateDeliveryDetails() {

  }

  approve() {
    console.log('Approve Delivery');
    this.delivery.userId = this.tokenService.getUserName();

    if (this.delivery.employeeId == 0) {
      Swal.fire('Error', 'Delivery employee not found', 'error');
    }
    if (this.delivery.vehicleId == 0) {
      Swal.fire('Error', 'Delivery vehicle not found', 'error');
    }
    if (this.delivery.employeeId != 0 && this.delivery.vehicleId != 0) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Approve delivery : {0}'.replace('{0}', String(this.delivery.id)),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          console.log('Delivery Request :', this.delivery);
          this.deliveryControllerService.updateDeliveryUsingPUT(this.delivery).subscribe(response => {
            console.log('Delivery Approved :', response);
            Swal.fire('Success', 'Delivery approved successfully', 'success').then(ok => {
              this.router.navigate(['/pages/delivery/main']);
            });
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Canceled
        }
      });
    }
  }

  suspend() {
    console.log('Suspend Delivery');

    Swal.fire({
      title: 'Are you sure?',
      text: 'Suspend delivery : {0}'.replace('{0}', String(this.delivery.id)),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        console.log('Delivery Request :', this.delivery);
        this.deliveryControllerService.suspendDeliveryUsingPUT({
          id: this.delivery.id,
          userId: this.tokenService.getUserName()
        }).subscribe(response => {
          console.log('Delivery Suspended :', response);
          Swal.fire('Success', 'Delivery suspend successfully', 'success').then(ok => {
            this.router.navigate(['/pages/delivery/main']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }
}
