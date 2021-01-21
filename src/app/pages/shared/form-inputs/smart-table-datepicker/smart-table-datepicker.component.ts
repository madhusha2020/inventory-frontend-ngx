import {Component, Input, OnInit} from '@angular/core';
import {NbDateService} from '@nebular/theme';
import {DefaultEditor, ViewCell} from 'ng2-smart-table';

@Component({
  selector: 'ngx-smart-table-datepicker',
  templateUrl: './smart-table-datepicker.component.html',
  styleUrls: ['./smart-table-datepicker.component.scss']
})
export class SmartTableDatepickerComponent extends DefaultEditor implements OnInit {

  minDate: Date;
  maxDate: Date;

  constructor(protected dateService: NbDateService<Date>) {
    super();
  }

  ngOnInit(): void {
    this.minDate = this.dateService.addDay(this.dateService.today(), +1);
    this.maxDate = this.dateService.addDay(this.dateService.today(), +15000);
  }

  dateChange(event) {
    console.log('Date Changed :', event);
    console.log('Date Changed :', this.dateService.format(event, 'yyyy-MM-dd'));
    this.cell.newValue = this.dateService.format(event, 'yyyy-MM-dd');
  }
}

@Component({
  template: `{{value | date:'short'}}`,
})
export class SmartTableDatepickerRenderComponent implements ViewCell, OnInit {
  @Input() value: string;
  @Input() rowData: any;

  constructor() { }

  ngOnInit() { }

}
