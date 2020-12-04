import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {NbDateService} from '@nebular/theme';

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
  @Output() changeEvent = new EventEmitter<any>();

  constructor(protected dateService: NbDateService<Date>) {
  }

  ngOnInit() {
  }

  dateChange(event) {
    console.log('Date Changed :', event);
    this.changeEvent.emit(this.dateService.format(event, 'yyyy-MM-dd'));
  }
}

