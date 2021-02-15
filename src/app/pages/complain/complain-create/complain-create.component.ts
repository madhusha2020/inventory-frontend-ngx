import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Complain, ComplainControllerService} from '../../../service/rest';
import {TokenService} from '../../../service/auth/token.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-complain-create',
  templateUrl: './complain-create.component.html',
  styleUrls: ['./complain-create.component.scss']
})
export class ComplainCreateComponent implements OnInit {

  complainForm: FormGroup;

  complain: Complain = {};

  constructor(private formBuilder: FormBuilder,
              private complainControllerService: ComplainControllerService,
              private tokenService: TokenService,
              private router: Router) {
  }

  get code() {
    return this.complainForm.get('code');
  }

  get description() {
    return this.complainForm.get('description');
  }

  get title() {
    return this.complainForm.get('title');
  }

  ngOnInit(): void {
    this.complainForm = this.formBuilder.group({
      code: [null, [Validators.required]],
      description: [null, [Validators.required]],
      title: [null, [Validators.required]],
    });
  }

  submit() {
    this.complain.code = this.code.value;
    this.complain.description = this.description.value;
    this.complain.title = this.title.value;
    this.complain.userId = this.tokenService.getUserName();

    console.log('Complain details :', this.complain);

    this.complainControllerService.saveComplainUsingPOST(this.complain).subscribe(response => {
      console.log('Complain response :', response);
      Swal.fire('Success', 'Complain successfully created', 'success').then(value => {
        this.router.navigate(['/pages/complain/main']);
      });
    });
  }
}
