import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {ActivatedRoute, Router} from '@angular/router';
import {ChemicalTest, ChemicalTestControllerService} from '../../../service/rest';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TokenService} from '../../../service/auth/token.service';

@Component({
  selector: 'ngx-chemical-test-view',
  templateUrl: './chemical-test-view.component.html',
  styleUrls: ['./chemical-test-view.component.scss']
})
export class ChemicalTestViewComponent implements OnInit {

  editMode: boolean;
  disabledProperty = 'disabled';
  title: string;

  chemicalTestForm: FormGroup;
  chemicalTest: ChemicalTest = {};

  constructor(private formBuilder: FormBuilder,
              private chemicalTestControllerService: ChemicalTestControllerService,
              private tokenService: TokenService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  get id() {
    return this.chemicalTestForm.get('id');
  }

  get saleId() {
    return this.chemicalTestForm.get('saleId');
  }

  get dorequested() {
    return this.chemicalTestForm.get('dorequested');
  }

  get dotested() {
    return this.chemicalTestForm.get('dotested');
  }

  get dodone() {
    return this.chemicalTestForm.get('dodone');
  }

  get result() {
    return this.chemicalTestForm.get('result');
  }

  ngOnInit(): void {
    this.editMode = false;
    this.route.queryParams.subscribe(params => {
        if (params.id) {
          this.fetchChemicalTest(params.id);
        } else {
          Swal.fire('Error', 'Chemical test not found', 'error');
        }
      }
    );

    this.chemicalTestForm = this.formBuilder.group({
      id: [null, [Validators.required]],
      saleId: [null, [Validators.required]],
      dorequested: [null, [Validators.required]],
      dotested: [null, [Validators.required]],
      dodone: [null, [Validators.required]],
      result: [null, [Validators.required]],
    });
  }

  fetchChemicalTest(id: string) {
    this.chemicalTestControllerService.getChemicalTestByIdUsingGET(id).subscribe(response => {
      console.log('ChemicalTest Data :', response);
      this.chemicalTest = response;
      this.setData();
    });
  }

  setData() {
    this.id.setValue(this.chemicalTest.id);
    this.saleId.setValue(this.chemicalTest.customerPayment.sale.id);
    this.dorequested.setValue(new Date(this.chemicalTest.dorequested));
    this.dotested.setValue(new Date(this.chemicalTest.dotested));
    this.dodone.setValue(new Date(this.chemicalTest.dodone));
    this.result.setValue(this.chemicalTest.result);
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

  dotestedChange(event) {
  }

  dodoneChange(event) {
  }

  updateTestDetails() {
    console.log('Test details :', this.chemicalTestForm.value);

    this.chemicalTest.dotested = this.dotested.value;
    this.chemicalTest.dodone = this.dodone.value;
    this.chemicalTest.result = this.result.value;
    this.chemicalTest.userId = this.tokenService.getUserName();

    console.log('Chemical Test :', this.chemicalTest);

    Swal.fire({
      title: 'Are you sure?',
      text: 'Update chemical test : {0}'.replace('{0}', String(this.chemicalTest.id)),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.chemicalTestControllerService.updateChemicalTestUsingPUT(this.chemicalTest).subscribe(response => {
          console.log('Update test :', response);
          Swal.fire('Success', 'Chemical test updated successfully', 'success').then(ok => {
            this.router.navigate(['/pages/test/main']);
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Canceled
      }
    });
  }
}
