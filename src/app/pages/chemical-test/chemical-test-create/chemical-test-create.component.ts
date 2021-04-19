import {Component, OnInit} from '@angular/core';
import {NbSearchService} from '@nebular/theme';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'ngx-chemical-test-create',
  templateUrl: './chemical-test-create.component.html',
  styleUrls: ['./chemical-test-create.component.scss']
})
export class ChemicalTestCreateComponent implements OnInit {

  offset = 0;
  limit = 100;

  chemicalTestList: Array<ChemicalTest> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      itemCode: {
        title: 'item#',
        type: 'string',
      },
      chemicalName: {
        title: 'Chemical Name',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      phLevel: {
        title: 'PH Level',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private searchService: NbSearchService) {

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
    this.chemicalTestList.push({itemCode: 'c0001', chemicalName: 'MAXTREAT 3004', description: 'Boiler water pH controller, Alkalinity builder', phLevel: '9.5-10'});
    this.chemicalTestList.push({itemCode: '', chemicalName: '', description: '', phLevel: ''});
    this.chemicalTestList.push({itemCode: '', chemicalName: '', description: '', phLevel: ''});
    this.chemicalTestList.push({itemCode: '', chemicalName: '', description: '', phLevel: ''});
    this.chemicalTestList.push({itemCode: '', chemicalName: '', description: '', phLevel: ''});
    this.chemicalTestList.push({itemCode: '', chemicalName: '', description: '', phLevel: ''});
    this.chemicalTestList.push({itemCode: '', chemicalName: '', description: '', phLevel: ''});
    this.chemicalTestList.push({itemCode: '', chemicalName: '', description: '', phLevel: ''});
    this.source.load(this.chemicalTestList);
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}

interface ChemicalTest {
  itemCode: string;
  chemicalName: string;
  description: string;
  phLevel: string;
}
