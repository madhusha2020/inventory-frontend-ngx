import {Component, OnInit} from '@angular/core';
import {PurchaseOrder, PurchaseOrderControllerService} from '../../../service/rest';
import {TokenService} from '../../../service/auth/token.service';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-purchase-order-view',
  templateUrl: './purchase-order-view.component.html',
  styleUrls: ['./purchase-order-view.component.scss']
})
export class PurchaseOrderViewComponent implements OnInit {

  purchaseOrderId: string;
  purchaseOrder: PurchaseOrder = {};

  constructor(private purchaseOrderControllerService: PurchaseOrderControllerService,
              private tokenService: TokenService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.purchaseOrderId = params.id;
          this.getOrder(params.id);
        } else {
          Swal.fire('Error', 'Purchase Order not found', 'error');
        }
      }
    );
  }

  getOrder(id: string) {
    this.purchaseOrderControllerService.getPurchaseOrderByIdUsingGET(id).subscribe(response => {
      console.log('OrderItems response :', response);
      this.purchaseOrder = response;
    });
  }
}

