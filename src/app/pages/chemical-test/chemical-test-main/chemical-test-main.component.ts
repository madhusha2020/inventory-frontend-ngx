import {Component, OnInit} from '@angular/core';
import {ChemicalTest, ChemicalTestControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-chemical-test-main',
  templateUrl: './chemical-test-main.component.html',
  styleUrls: ['./chemical-test-main.component.scss']
})
export class ChemicalTestMainComponent implements OnInit {

  offset = 0;
  limit = 100;

  chemicalTestList: Array<ChemicalTest> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      id: {
        title: 'Test#',
        type: 'number',
      },
      dorequested: {
        title: 'Requested Date',
        type: 'string',
      },
      dotested: {
        title: 'Tested Date',
        type: 'string',
      },
      dodone: {
        title: 'Finished Date',
        type: 'string',
      },
      result: {
        title: 'Result',
        type: 'string',
      },
      statusDescription: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private chemicalTestControllerService: ChemicalTestControllerService,
              private searchService: NbSearchService,
              private router: Router) {

    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        console.log('Search', data.term);
        this.source.setFilter([
          {
            field: 'name',
            search: data.term
          }
        ], false);
      });
  }

  ngOnInit(): void {
    this.fetchCustomerPayments();
  }

  fetchCustomerPayments() {
    this.chemicalTestControllerService.getAllChemicalTestsUsingGET().subscribe(response => {
      console.log('Chemical Test Data :', response);
      response.chemicalTestList.forEach(chemicalTest => {
        chemicalTest.statusDescription = ServiceUtil.getStatusDescription(chemicalTest.status);
        this.chemicalTestList.push(chemicalTest);
      });
      this.source.load(this.chemicalTestList);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/test/view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}

