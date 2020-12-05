import {Component, OnInit} from '@angular/core';
import {OrderControllerService, OrderItems} from '../../../service/rest';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
import {TokenService} from '../../../service/auth/token.service';

@Component({
  selector: 'ngx-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit {

  orderId: string;
  orderItems: Array<OrderItems> = [];

  constructor(private orderControllerService: OrderControllerService,
              private tokenService: TokenService,
              private route: ActivatedRoute) {
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
      this.orderItems = response.orderItems;
    });
  }
}
