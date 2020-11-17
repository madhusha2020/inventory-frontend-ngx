import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-input-spinner-default',
  templateUrl: './input-spinner-default.component.html',
  styleUrls: ['./input-spinner-default.component.scss']
})
export class InputSpinnerDefaultComponent implements OnInit {

  @Input() type: string;
  @Input() title: string;
  @Input() placeholder: string;
  @Input() field: AbstractControl;
  @Input() disableProperty: string = null;

  constructor() {
  }

  ngOnInit() {
  }

}
