import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-input-spinner-default',
  templateUrl: './input-spinner-default.component.html',
  styleUrls: ['./input-spinner-default.component.scss']
})
export class InputSpinnerDefaultComponent implements OnInit, OnDestroy {

  @Input() type: string;
  @Input() title: string;
  @Input() placeholder: string;
  @Input() field: AbstractControl;
  @Input() disableProperty: string = null;

  @Output() changeEvent = new EventEmitter<any>();

  valSub: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.valSub = this.field.valueChanges.subscribe(event => {
      this.changeEvent.emit(event);
    });
  }

  ngOnDestroy(): void {
    if (this.valSub) {
      this.valSub.unsubscribe();
    }
  }
}
