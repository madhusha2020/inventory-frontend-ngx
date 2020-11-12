import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserControllerService} from '../../../service/rest';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  editMode: boolean;

  constructor(private router: ActivatedRoute,
              private userController: UserControllerService) {
  }

  ngOnInit(): void {
    this.editMode = false;
    this.router.queryParams.subscribe(params => {
        if (params.id) {
          this.fetchCustomer(params.id);
        } else {
          Swal.fire('Error', 'Customer not found', 'error');
        }
      }
    );
  }

  fetchCustomer(id: string) {
    this.userController.getCustomerByIdUsingGET(id).subscribe(response => {
      console.log('Customer Data :', response);
    });
  }
}
