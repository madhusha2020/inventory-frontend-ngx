import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-input-textarea-default',
  templateUrl: './input-textarea-default.component.html',
  styleUrls: ['./input-textarea-default.component.scss']
})
export class InputTextareaDefaultComponent implements OnInit {

  @Input() title: string;
  @Input() placeholder: string;
  @Input() field: AbstractControl;
  @Input() disableProperty: string = null;

  constructor() {
  }

  ngOnInit() {
  }
}
