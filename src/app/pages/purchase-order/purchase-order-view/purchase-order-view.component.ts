import {Component, OnInit} from '@angular/core';
import {PurchaseOrder, PurchaseOrderControllerService} from '../../../service/rest';
import {TokenService} from '../../../service/auth/token.service';
import {ActivatedRoute, Router} from '@angular/router';
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
              private route: ActivatedRoute,
              private router: Router) {
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

  approve() {
    console.log('Approve Purchase Order');
    Swal.fire({
      title: 'Are you sure?',
      text: 'Approve Purchase Order : {0}'.replace('{0}', this.purchaseOrderId),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.purchaseOrderControllerService.approvePurchaseOrderUsingPUT({
          id: Number(this.purchaseOrderId),
          userId: this.tokenService.getUserName()
        }).subscribe(response => {
          console.log('Purchase Order Approved :', response);
          Swal.fire('Success', 'Purchase Order approved successfully', 'success').then(ok => {
            this.router.navigate(['/pages/purchase-order/main']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }

  suspend() {
    console.log('Reject Purchase Order');
    Swal.fire({
      title: 'Are you sure?',
      text: 'Reject Purchase Order : {0}'.replace('{0}', this.purchaseOrderId),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.purchaseOrderControllerService.rejectPurchaseOrderUsingPUT({
          id: Number(this.purchaseOrderId),
          userId: this.tokenService.getUserName()
        }).subscribe(response => {
          console.log('Purchase Order Rejected :', response);
          Swal.fire('Success', 'Purchase Order rejected successfully', 'success').then(ok => {
            this.router.navigate(['/pages/purchase-order/main']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }
}

