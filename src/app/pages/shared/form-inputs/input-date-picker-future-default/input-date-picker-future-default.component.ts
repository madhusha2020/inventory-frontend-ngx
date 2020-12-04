import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {NbDateService} from '@nebular/theme';

@Component({
  selector: 'app-input-date-picker-future-default',
  templateUrl: './input-date-picker-future-default.component.html',
  styleUrls: ['./input-date-picker-future-default.component.scss']
})
export class InputDatePickerFutureDefaultComponent implements OnInit {

  @Input() type: string;
  @Input() title: string;
  @Input() placeholder: string;
  @Input() field: AbstractControl;
  @Input() disableProperty: string = null;
  @Output() changeEvent = new EventEmitter<any>();

  minDate: Date;
  maxDate: Date;

  constructor(protected dateService: NbDateService<Date>) {
  }

  ngOnInit() {
    this.minDate = this.dateService.addDay(this.dateService.today(), +1);
    this.maxDate = this.dateService.addDay(this.dateService.today(), +15000);
  }

  dateChange(event) {
    console.log('Date Changed :', event);
    this.changeEvent.emit(this.dateService.format(event, 'yyyy-MM-dd'));
  }
}
