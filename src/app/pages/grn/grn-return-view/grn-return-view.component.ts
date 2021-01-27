import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SupplierReturn, SupplierReturnControllerService, SupplierReturnInventory} from '../../../service/rest';
import {TokenService} from '../../../service/auth/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-grn-return-view',
  templateUrl: './grn-return-view.component.html',
  styleUrls: ['./grn-return-view.component.scss']
})
export class GrnReturnViewComponent implements OnInit {

  editMode: boolean;
  disabledProperty = 'disabled';
  title: string;

  returnForm: FormGroup;
  supplierReturn: SupplierReturn = {};
  supplierReturnItems: Array<SupplierReturnInventory> = [];

  constructor(private formBuilder: FormBuilder,
              private supplierReturnControllerService: SupplierReturnControllerService,
              private tokenService: TokenService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  get returnId() {
    return this.returnForm.get('returnId');
  }

  get code() {
    return this.returnForm.get('code');
  }

  get reason() {
    return this.returnForm.get('reason');
  }

  get dorecived() {
    return this.returnForm.get('dorecived');
  }

  get doreturned() {
    return this.returnForm.get('doreturned');
  }

  ngOnInit(): void {
    this.editMode = false;
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.fetchReturn(params.id);
        } else {
          Swal.fire('Error', 'Return not found', 'error');
        }
      }
    );

    this.returnForm = this.formBuilder.group({
      returnId: [null, [Validators.required]],
      code: [null, [Validators.required]],
      reason: [null, [Validators.required]],
      dorecived: [null, [Validators.required]],
      doreturned: [null, [Validators.required]],
    });
  }

  enableEditMode() {
    this.editMode = true;
    this.disabledProperty = null;
    this.title = 'Edit';
  }

  disabledEditMode() {
    this.editMode = false;
    this.disabledProperty = 'disabled';
    this.title = null;
  }

  fetchReturn(id: string) {
    this.supplierReturnControllerService.getSupplierRefundByIdUsingGET1(id).subscribe(response => {
      console.log('Return Data :', response);
      this.supplierReturn = response;
      this.supplierReturnItems = response.supplierReturnInventories;
      this.setData();
    });
  }

  setData() {
    this.returnId.setValue(this.supplierReturn.id);
    this.code.setValue(this.supplierReturn.code);
    this.reason.setValue(this.supplierReturn.reason);
    this.dorecived.setValue(this.supplierReturn.dorecived);
    if (this.supplierReturn.doreturned) {
      this.doreturned.setValue(new Date(this.supplierReturn.doreturned));
    } else {
      this.doreturned.setValue(new Date());
    }
  }

  dateChangeEvent(event) {
    console.log('date change event :', event);
    this.supplierReturn.doreturned = event;
  }

  submit() {
    this.supplierReturn.reason = this.reason.value;
    this.supplierReturn.userId = this.tokenService.getUserName();

    console.log('Update return', this.supplierReturn);

    Swal.fire({
      title: 'Are you sure?',
      text: 'Update supplier return : {0}'.replace('{0}', String(this.supplierReturn.id)),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        console.log('Return Request :', this.supplierReturn);
        this.supplierReturnControllerService.updateSupplierReturnUsingPUT(this.supplierReturn).subscribe(response => {
          console.log('Return response :', response);
          Swal.fire('Success', 'Supplier return successfully', 'success').then(ok => {
            this.router.navigate(['/pages/grn/return']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }
}
