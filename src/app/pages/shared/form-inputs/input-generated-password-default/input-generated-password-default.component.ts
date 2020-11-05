import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-input-generated-password-default',
  templateUrl: './input-generated-password-default.component.html',
  styleUrls: ['./input-generated-password-default.component.scss']
})
export class InputGeneratedPasswordDefaultComponent implements OnInit, OnDestroy {

  @Input() type: string;
  @Input() title: string;
  @Input() placeholder: string;
  @Input() field: AbstractControl;
  @Input() userName: AbstractControl;
  @Input() prefix: string;

  valSub: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.valSub = this.userName.valueChanges.subscribe(event => {
      let passwordFormat = '{0}.{1}'.replace('{0}', this.prefix);
      this.field.setValue(passwordFormat.replace('{1}', this.userName.value));
    });
  }

  ngOnDestroy() {
    if (this.valSub) {
      this.valSub.unsubscribe();
    }
  }
}
