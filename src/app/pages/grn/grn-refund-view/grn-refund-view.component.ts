import { Component, OnInit } from '@angular/core';
import {
  ProductOutboundControllerService,
  ProductOutboundItem,
  SupplierRefundControllerService, SupplierRefundInventory
} from '../../../service/rest';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-grn-refund-view',
  templateUrl: './grn-refund-view.component.html',
  styleUrls: ['./grn-refund-view.component.scss']
})
export class GrnRefundViewComponent implements OnInit {

  supplierRefundId: string;
  supplierRefundItems: Array<SupplierRefundInventory> = [];

  constructor(private  supplierRefundControllerService: SupplierRefundControllerService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.supplierRefundId = params.id;
          this.getRefund(params.id);
        } else {
          Swal.fire('Error', 'Refund not found', 'error');
        }
      }
    );
  }

  getRefund(id: string) {
    this.supplierRefundControllerService.getSupplierRefundByIdUsingGET(id).subscribe(response => {
      console.log('Refund response :', response);
      this.supplierRefundItems = response.supplierRefundInventories;
    });
  }
}

