import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-input-comparator-default',
  templateUrl: './input-comparator-default.component.html',
  styleUrls: ['./input-comparator-default.component.scss']
})
export class InputComparatorDefaultComponent implements OnInit, OnDestroy {

  @Input() type: string;
  @Input() title: string;
  @Input() placeholder: string;
  @Input() field: AbstractControl;
  @Input() comparableField: AbstractControl;

  misMatch: boolean;
  valSub: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.valSub = this.field.valueChanges.subscribe(event => {
      this.misMatch = this.field.value != this.comparableField.value;
    });
  }

  ngOnDestroy() {
    if (this.valSub) {
      this.valSub.unsubscribe();
    }
  }
}
