import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-input-amount-default',
  templateUrl: './input-amount-default.component.html',
  styleUrls: ['./input-amount-default.component.scss']
})
export class InputAmountDefaultComponent implements OnInit {

  @Input() type: string;
  @Input() title: string;
  @Input() placeholder: string;
  @Input() field: AbstractControl;
  @Input() disableProperty: string = null;

  constructor() {
  }

  ngOnInit(): void {
  }
}
