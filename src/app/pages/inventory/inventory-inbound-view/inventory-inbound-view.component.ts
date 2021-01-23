import {Component, OnInit} from '@angular/core';
import {ProductInboundControllerService, ProductInboundItem} from '../../../service/rest';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-inventory-inbound-view',
  templateUrl: './inventory-inbound-view.component.html',
  styleUrls: ['./inventory-inbound-view.component.scss']
})
export class InventoryInboundViewComponent implements OnInit {

  productInboundId: string;
  productInboundItems: Array<ProductInboundItem> = [];

  constructor(private  productInboundControllerService: ProductInboundControllerService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.productInboundId = params.id;
          this.getProductInbound(params.id);
        } else {
          Swal.fire('Error', 'Product Inbound not found', 'error');
        }
      }
    );
  }

  getProductInbound(id: string) {
    this.productInboundControllerService.getProductInboundByIdUsingGET(id).subscribe(response => {
      console.log('ProductItems response :', response);
      this.productInboundItems = response.productInboundItems;
    });
  }
}
