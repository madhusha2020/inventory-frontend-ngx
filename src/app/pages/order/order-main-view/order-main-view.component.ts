import { Component, OnInit } from '@angular/core';
import {Order, OrderControllerService} from '../../../service/rest';
import {TokenService} from '../../../service/auth/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-order-main-view',
  templateUrl: './order-main-view.component.html',
  styleUrls: ['./order-main-view.component.scss']
})
export class OrderMainViewComponent implements OnInit {

  orderId: string;
  order: Order = {};

  constructor(private orderControllerService: OrderControllerService,
              private tokenService: TokenService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.orderId = params.id;
          this.getOrder(params.id);
        } else {
          Swal.fire('Error', 'Order not found', 'error');
        }
      }
    );
  }

  getOrder(id: string) {
    this.orderControllerService.getOrderByIdUsingGET(id).subscribe(response => {
      console.log('OrderItems response :', response);
      this.order = response;
    });
  }

  approve() {
    console.log('Approve order');
    Swal.fire({
      title: 'Are you sure?',
      text: 'Approve order : {0}'.replace('{0}', this.orderId),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.orderControllerService.approveOrderUsingPUT({
          id: Number(this.orderId),
          userId: this.tokenService.getUserName()
        }).subscribe(response => {
          console.log('Order Approved :', response);
          Swal.fire('Success', 'Order approved successfully', 'success').then(ok => {
            this.router.navigate(['/pages/order/main-all']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }

  suspend() {
    console.log('Reject order');
    Swal.fire({
      title: 'Are you sure?',
      text: 'Reject order : {0}'.replace('{0}', this.orderId),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.orderControllerService.rejectOrderUsingPUT({
          id: Number(this.orderId),
          userId: this.tokenService.getUserName()
        }).subscribe(response => {
          console.log('Order Rejected :', response);
          Swal.fire('Success', 'Order rejected successfully', 'success').then(ok => {
            this.router.navigate(['/pages/order/main-all']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }
}
