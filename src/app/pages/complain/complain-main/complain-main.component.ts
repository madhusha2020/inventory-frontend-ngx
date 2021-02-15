import { Component, OnInit } from '@angular/core';
import {ChemicalTest, ChemicalTestControllerService, Complain, ComplainControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'ngx-complain-main',
  templateUrl: './complain-main.component.html',
  styleUrls: ['./complain-main.component.scss']
})
export class ComplainMainComponent implements OnInit {

  offset = 0;
  limit = 100;

  complainList: Array<Complain> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      id: {
        title: 'Complain#',
        type: 'number',
      },
      code: {
        title: 'Code',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      title: {
        title: 'Title',
        type: 'string',
      },
      response: {
        title: 'Response',
        type: 'string',
      },
      statusDescription: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private complainControllerService: ComplainControllerService,
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
    this.fetchComplains();
  }

  fetchComplains() {
    this.complainControllerService.getAllComplainsUsingGET().subscribe(response => {
      console.log('Complains Data :', response);
      response.complainList.forEach(complain => {
        complain.statusDescription = ServiceUtil.getStatusDescription(complain.status);
        this.complainList.push(complain);
      });
      this.source.load(this.complainList);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/complain/view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}
