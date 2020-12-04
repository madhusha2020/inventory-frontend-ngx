import {Component, Input, OnInit} from '@angular/core';
import {ImageUploadControllerService, Item, ItemControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {ServiceUtil} from '../../../service/util/service-util';

@Component({
  selector: 'app-list-item-view',
  templateUrl: './list-item-view.component.html',
  styleUrls: ['./list-item-view.component.scss']
})
export class ListItemViewComponent implements OnInit {

  @Input() itemId: number;
  @Input() qty: number;
  @Input() defaultImage: string;

  item: Item = {};
  retrievedImage: any;

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      code: {
        title: 'Item Code',
        type: 'string',
      },
      orderedQty: {
        title: 'Quantity',
        type: 'number',
      },
      spriceValue: {
        title: 'Price',
        type: 'string',
      },
      lastpriceValue: {
        title: 'Last Price',
        type: 'string',
      },
      dangerlevel: {
        title: 'Danger Level',
        type: 'string',
      },
      weightvolume: {
        title: 'Weight / Volume',
        type: 'number',
      },
      unit: {
        title: 'Unit',
        type: 'string',
      },
      statusDescription: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private itemControllerService: ItemControllerService,
              private imageUploadControllerService: ImageUploadControllerService) {
  }

  ngOnInit(): void {
    this.itemControllerService.getItemByIdUsingGET(String(this.itemId)).subscribe(response => {
      console.log('Item response :', response);
      this.item = response;
      this.item.statusDescription = ServiceUtil.getStatusDescription(this.item.status);
      this.item.spriceValue = this.item.sprice.toLocaleString('en-US', {style: 'currency', currency: 'LKR'});
      this.item.lastpriceValue = this.item.lastprice.toLocaleString('en-US', {style: 'currency', currency: 'LKR'});
      this.item.orderedQty = this.qty;
      this.source.load([this.item]);
    });
    this.imageUploadControllerService.getImageUsingGET('item', String(this.itemId)).subscribe(response => {
      console.log('Item photo response :', response);
      if (response.photo) {
        this.retrievedImage = 'data:image/jpeg;base64,' + response.photo;
      }
    });
  }
}
