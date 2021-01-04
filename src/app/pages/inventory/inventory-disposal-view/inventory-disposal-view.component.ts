import {Component, OnInit} from '@angular/core';
import {Disposal, DisposalControllerService} from '../../../service/rest';
import {TokenService} from '../../../service/auth/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-inventory-disposal-view',
  templateUrl: './inventory-disposal-view.component.html',
  styleUrls: ['./inventory-disposal-view.component.scss']
})
export class InventoryDisposalViewComponent implements OnInit {

  disposalId: string;
  disposal: Disposal = {};

  constructor(private disposalControllerService: DisposalControllerService,
              private tokenService: TokenService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.disposalId = params.id;
          this.getDisposal(params.id);
        } else {
          Swal.fire('Error', 'Disposal not found', 'error');
        }
      }
    );
  }

  getDisposal(id: string) {
    this.disposalControllerService.getDisposalByIdUsingGET(id).subscribe(response => {
      console.log('Disposal response :', response);
      this.disposal = response;
    });
  }

  approve() {
    console.log('Approve disposal');
    Swal.fire({
      title: 'Are you sure?',
      text: 'Approve disposal : {0}'.replace('{0}', this.disposalId),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.disposalControllerService.approveDisposeUsingPUT({
          id: Number(this.disposalId),
          userId: this.tokenService.getUserName()
        }).subscribe(response => {
          console.log('Disposal Approved :', response);
          Swal.fire('Success', 'Disposal approved successfully', 'success').then(ok => {
            this.router.navigate(['/pages/inventory/disposal-main']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }

  suspend() {
    console.log('Reject disposal');
    Swal.fire({
      title: 'Are you sure?',
      text: 'Reject disposal : {0}'.replace('{0}', this.disposalId),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.disposalControllerService.suspendDisposeUsingPUT({
          id: Number(this.disposalId),
          userId: this.tokenService.getUserName()
        }).subscribe(response => {
          console.log('Disposal Rejected :', response);
          Swal.fire('Success', 'Disposal rejected successfully', 'success').then(ok => {
            this.router.navigate(['/pages/inventory/disposal-main']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }
}
