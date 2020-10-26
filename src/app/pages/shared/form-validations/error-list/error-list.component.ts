import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-error-list',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.scss']
})
export class ErrorListComponent implements OnInit, OnDestroy {

  @Input() field: AbstractControl;
  errorList: Array<string> = [];

  valSub: Subscription;

  constructor() {
  }

  ngOnInit() {
    if (this.field && this.field.errors) {
      this.errorList = this.getErrorList(this.field);
    }

    this.valSub = this.field.valueChanges.subscribe(event => {
      if (this.field && this.field.errors) {
        this.errorList = this.getErrorList(this.field);
      }
    });
  }

  ngOnDestroy() {
    if (this.valSub) {
      this.valSub.unsubscribe();
    }
  }


  getErrorList(field: AbstractControl): Array<string> {
    const errList: Array<string> = [];
    if (field.errors.required) {
      errList.push('Field is required');
    }
    if (field.errors.minlength) {
      errList.push('Should be at least {0} characters'.replace('{0}', field.errors.minlength.requiredLength));
    }
    if (field.errors.maxlength) {
      errList.push('Should not be more than {0} characters'.replace('{0}', field.errors.maxlength.requiredLength));
    }
    if (field.errors.max) {
      errList.push('Should not exceed {0} characters'.replace('{0}', field.errors.max.max));
    }
    if (field.errors.min) {
      errList.push('Should not decreased {0} characters'.replace('{0}', field.errors.min.min));
    }
    if (field.errors.email) {
      errList.push('Invalid Email Format');
    }
    if (field.errors.pattern) {
      errList.push('Invalid format provided. Please check if the input is valid');
    }

    return errList;
  }
}
