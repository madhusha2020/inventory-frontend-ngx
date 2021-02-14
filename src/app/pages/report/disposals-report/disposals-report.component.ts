import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Disposal, ReportControllerService, ReportRequest} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {ServiceUtil} from '../../../service/util/service-util';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-disposals-report',
  templateUrl: './disposals-report.component.html',
  styleUrls: ['./disposals-report.component.scss']
})
export class DisposalsReportComponent implements OnInit {

  reportForm: FormGroup;
  reportRequest: ReportRequest = {};

  itemID = 0;
  disposalList: Array<Disposal> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    pager: {
      display: true,
      perPage: 7
    },
    columns: {
      id: {
        title: 'Disposal#',
        type: 'number',
      },
      date: {
        title: 'Disposal Date',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      reason: {
        title: 'Reason',
        type: 'string',
      },
      statusDescription: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private formBuilder: FormBuilder,
              private reportControllerService: ReportControllerService) {
  }

  get itemId() {
    return this.reportForm.get('itemId');
  }

  get fromDate() {
    return this.reportForm.get('fromDate');
  }

  get toDate() {
    return this.reportForm.get('toDate');
  }

  ngOnInit(): void {
    this.reportForm = this.formBuilder.group({
      itemId: [null],
      fromDate: [null, [Validators.required]],
      toDate: [null, [Validators.required]],
    });
  }

  itemStateChange(event) {
    console.log('Item state change : ', event);
    this.itemID = event;
  }

  generate() {
    this.disposalList = [];
    this.reportControllerService.disposalReportUsingPOST({
      itemId: this.itemID,
      fromDate: this.fromDate.value,
      toDate: this.toDate.value
    }).subscribe(response => {
      console.log('Disposals :', response);
      response.disposalList.forEach(disposal => {
        disposal.statusDescription = ServiceUtil.getStatusDescription(disposal.status);
        this.disposalList.push(disposal);
      });
      this.source.load(this.disposalList);
    });
  }

  downloadCSV() {
    if (this.disposalList.length > 0) {
      const options = {
        fieldSeparator: ',',
        quoteStrings: '',
        decimalseparator: '.',
        showLabels: true,
        showTitle: true,
        useBom: true,
        title: 'Disposal Report',
        headers: [
          'Disposal#',
          'Disposal Date',
          'Description',
          'Reason',
          'Status',
        ],
      };

      let disposals: Array<DisposalReport> = [];
      this.disposalList.forEach(disposal => {
        disposals.push({
          disposalId: disposal.id,
          disposalDate: disposal.date,
          description: disposal.description,
          reason: disposal.reason,
          status: disposal.statusDescription
        });
      });

      new Angular5Csv(disposals, 'disposal-report', options);
    } else {
      Swal.fire('Error', 'Please generate report first', 'error');
    }
  }
}

interface DisposalReport {
  disposalId: number;
  disposalDate: string;
  description: string;
  reason: string;
  status: string;
}
