import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-input-default',
  templateUrl: './input-default.component.html',
  styleUrls: ['./input-default.component.scss']
})
export class InputDefaultComponent implements OnInit {

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
