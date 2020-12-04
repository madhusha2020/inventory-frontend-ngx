import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {ActivatedRoute} from '@angular/router';
import {ProductOutboundControllerService, ProductOutboundItem} from '../../../service/rest';

@Component({
  selector: 'ngx-inventory-outbound-view',
  templateUrl: './inventory-outbound-view.component.html',
  styleUrls: ['./inventory-outbound-view.component.scss']
})
export class InventoryOutboundViewComponent implements OnInit {

  productOutboundId: string;
  productOutBoundItems: Array<ProductOutboundItem> = [];

  constructor(private  productOutboundControllerService: ProductOutboundControllerService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.productOutboundId = params.id;
          this.getProductOutbound(params.id);
        } else {
          Swal.fire('Error', 'Product Outbound not found', 'error');
        }
      }
    );
  }

  getProductOutbound(id: string) {
    this.productOutboundControllerService.getProductOutboundByIdUsingGET(id).subscribe(response => {
      console.log('ProductItems response :', response);
      this.productOutBoundItems = response.productOutboundItems;
    });
  }
}
