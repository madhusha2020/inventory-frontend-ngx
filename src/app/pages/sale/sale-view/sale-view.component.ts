import { Component, OnInit } from '@angular/core';
import {Item, OrderItems, SaleControllerService, SaleInventory} from '../../../service/rest';
import {TokenService} from '../../../service/auth/token.service';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-sale-view',
  templateUrl: './sale-view.component.html',
  styleUrls: ['./sale-view.component.scss']
})
export class SaleViewComponent implements OnInit {

  saleId: string;
  saleInventoryList: Array<SaleInventory> = [];

  constructor(private saleControllerService: SaleControllerService,
              private tokenService: TokenService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.saleId = params.id;
          this.getOrder(params.id);
        } else {
          Swal.fire('Error', 'Sale not found', 'error');
        }
      }
    );
  }

  getOrder(id: string) {
    this.saleControllerService.getSaleByIdUsingGET(id).subscribe(response => {
      console.log('SaleInventory response :', response);
      this.saleInventoryList = response.saleInventoryList;
    });
  }
}
