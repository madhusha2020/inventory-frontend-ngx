import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {NbDateService} from '@nebular/theme';

@Component({
  selector: 'app-input-date-picker-max-except-today-default',
  templateUrl: './input-date-picker-max-except-today-default.component.html',
  styleUrls: ['./input-date-picker-max-except-today-default.component.scss']
})
export class InputDatePickerMaxExceptTodayDefaultComponent implements OnInit {

  @Input() type: string;
  @Input() title: string;
  @Input() placeholder: string;
  @Input() field: AbstractControl;
  @Input() disableProperty: string = null;

  minDate: Date;
  maxDate: Date;

  constructor(protected dateService: NbDateService<Date>) {
  }

  ngOnInit() {
    this.minDate = this.dateService.addDay(this.dateService.today(), -15000);
    this.maxDate = this.dateService.addDay(this.dateService.today(), -1);
  }

}
