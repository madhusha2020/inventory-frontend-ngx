import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ngx-inventory-view',
  templateUrl: './inventory-view.component.html',
  styleUrls: ['./inventory-view.component.scss']
})
export class InventoryViewComponent implements OnInit {

  itemId: string;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.itemId = params.id;
        } else {
          Swal.fire('Error', 'Inventory item not found', 'error');
        }
      }
    );
  }
}
