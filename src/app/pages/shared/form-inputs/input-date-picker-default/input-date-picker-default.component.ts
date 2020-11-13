import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-input-date-picker-default',
  templateUrl: './input-date-picker-default.component.html',
  styleUrls: ['./input-date-picker-default.component.scss']
})
export class InputDatePickerDefaultComponent implements OnInit {

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

