import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReportControllerService, ReportRequest, SupplierReturn} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {ServiceUtil} from '../../../service/util/service-util';
import {Angular5Csv} from 'angular5-csv/dist/Angular5-csv';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-supplier-returns-report',
  templateUrl: './supplier-returns-report.component.html',
  styleUrls: ['./supplier-returns-report.component.scss']
})
export class SupplierReturnsReportComponent implements OnInit {

  reportForm: FormGroup;
  reportRequest: ReportRequest = {};

  returnList: Array<SupplierReturn> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    pager: {
      display: true,
      perPage: 7
    },
    columns: {
      id: {
        title: 'Return#',
        type: 'number',
      },
      code: {
        title: 'Code',
        type: 'string',
      },
      reason: {
        title: 'Reason',
        type: 'string',
      },
      dorecived: {
        title: 'Received Date',
        type: 'string',
      },
      doreturned: {
        title: 'Returned Date',
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

  get fromDate() {
    return this.reportForm.get('fromDate');
  }

  get toDate() {
    return this.reportForm.get('toDate');
  }

  ngOnInit(): void {
    this.reportForm = this.formBuilder.group({
      supplierId: [null],
      fromDate: [null, [Validators.required]],
      toDate: [null, [Validators.required]],
    });
  }

  generate() {
    this.returnList = [];
    this.reportControllerService.supplierReturnReportUsingPOST({
      fromDate: this.fromDate.value,
      toDate: this.toDate.value
    }).subscribe(response => {
      console.log('Supplier Returns :', response);
      response.supplierReturnList.forEach(returns => {
        returns.statusDescription = ServiceUtil.getStatusDescription(returns.status);
        this.returnList.push(returns);
      });
      this.source.load(this.returnList);
    });
  }

  downloadCSV() {
    if (this.returnList.length > 0) {
      const options = {
        fieldSeparator: ',',
        quoteStrings: '',
        decimalseparator: '.',
        showLabels: true,
        showTitle: true,
        useBom: true,
        title: 'Supplier Return Report',
        headers: [
          'Return#',
          'Code',
          'Reason',
          'Received Date',
          'Returned Date',
          'Status',
        ],
      };

      let supplierReturns: Array<SupplierReturnReport> = [];
      this.returnList.forEach(supplierReturn => {
        supplierReturns.push({
          returnId: supplierReturn.id,
          code: supplierReturn.code,
          reason: supplierReturn.reason,
          receivedDate: supplierReturn.dorecived,
          returnedDate: supplierReturn.doreturned,
          status: supplierReturn.statusDescription
        });
      });

      new Angular5Csv(supplierReturns, 'supplier-return-report', options);
    } else {
      Swal.fire('Error', 'Please generate report first', 'error');
    }
  }
}

interface SupplierReturnReport {
  returnId: number;
  code: string;
  reason: string;
  receivedDate: string;
  returnedDate: string;
  status: string;
}
