import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Complain, ComplainControllerService} from '../../../service/rest';
import {TokenService} from '../../../service/auth/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-complain-view',
  templateUrl: './complain-view.component.html',
  styleUrls: ['./complain-view.component.scss']
})
export class ComplainViewComponent implements OnInit {

  editMode: boolean;
  disabledProperty = 'disabled';
  title: string;

  complainForm: FormGroup;

  complain: Complain = {};

  constructor(private formBuilder: FormBuilder,
              private complainControllerService: ComplainControllerService,
              private tokenService: TokenService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  get code() {
    return this.complainForm.get('code');
  }

  get description() {
    return this.complainForm.get('description');
  }

  get complainTitle() {
    return this.complainForm.get('complainTitle');
  }

  get response() {
    return this.complainForm.get('response');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.complain.id = params.id;
          this.fetchComplain(params.id);
        } else {
          Swal.fire('Error', 'Complain not found', 'error');
        }
      }
    );

    this.complainForm = this.formBuilder.group({
      code: [null, [Validators.required]],
      description: [null, [Validators.required]],
      complainTitle: [null, [Validators.required]],
      response: [null, [Validators.required]],
    });
  }

  fetchComplain(id: string) {
    this.complainControllerService.getComplainByIdUsingGET(id).subscribe(response => {
      console.log('Complain response ', response);
      this.complain = response;
      this.setData();
    });
  }

  setData() {
    this.code.setValue(this.complain.code);
    this.description.setValue(this.complain.description);
    this.complainTitle.setValue(this.complain.title);
    this.response.setValue(this.complain.response);
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
    this.setData();
  }

  updateComplainDetails() {
    this.complain.code = this.code.value;
    this.complain.description = this.description.value;
    this.complain.title = this.complainTitle.value;
    this.complain.response = this.response.value;
    this.complain.userId = this.tokenService.getUserName();

    console.log('Complain details :', this.complain);

    Swal.fire({
      title: 'Are you sure?',
      text: 'Update complain : {0}'.replace('{0}', String(this.complain.id)),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.complainControllerService.updateComplainUsingPUT(this.complain).subscribe(response => {
          console.log('Complain response :', response);
          Swal.fire('Success', 'Complain successfully updated', 'success').then(value => {
            this.router.navigate(['/pages/complain/main']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }
}
