import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import Swal from 'sweetalert2';
import {PurchaseControllerService} from '../../../service/rest';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NbDateService} from '@nebular/theme';

@Component({
  selector: 'app-item-list-edit',
  templateUrl: './item-list-edit.component.html',
  styleUrls: ['./item-list-edit.component.scss']
})
export class ItemListEditComponent implements OnInit {

  @Input() parentFormIsValid: boolean;
  @Input() purchaseId: number;
  @Output() changeEvent = new EventEmitter<any>();

  dummyForm: FormGroup;
  selectedItemsArray: Array<CustomModel> = [];
  selectedItemsMap: Map<number, number> = new Map<number, number>();

  settings = {
    pager: {
      display: true,
      perPage: 5
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      itemId: {
        title: 'Item#',
        type: 'number',
        editable: false,
      },
      itemName: {
        title: 'Item Name',
        type: 'string',
        editable: false,
      },
      qty: {
        title: 'Quantity',
        type: 'number',
        editable: false,
      },
      expireDate: {
        title: 'Expire Date',
        type: 'string',
        editable: false,
      },
      // expireDate: {
      //   title: 'Expire Date',
      //   type: 'custom',
      //   renderComponent: SmartTableDatepickerRenderComponent,
      // },
      acceptedQty: {
        title: 'Accepted Quantity',
        type: 'number',
      },
      rejectedQty: {
        title: 'Rejected Quantity',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private formBuilder: FormBuilder,
              protected dateService: NbDateService<Date>,
              private purchaseControllerService: PurchaseControllerService) {
  }

  get expireDate() {
    return this.dummyForm.get('expireDate');
  }

  ngOnInit() {
    console.log('purchaseId :', this.purchaseId);
    this.purchaseControllerService.getPurchaseByIdUsingGET(String(this.purchaseId)).subscribe(response => {
      console.log('Purchase Data :', response);
      response.purchaseItems.forEach(purchaseItem => {
        this.selectedItemsArray.push({
          itemId: purchaseItem.purchaseItemId.itemId,
          itemName: purchaseItem.itemName,
          expireDate: purchaseItem.doexpire,
          qty: purchaseItem.qty
        });
      });
      this.source.load(this.selectedItemsArray);
    });

    this.dummyForm = this.formBuilder.group({
      expireDate: [null, [Validators.required]],
    });
  }

  onSaveConfirm(event) {
    console.log('Edit', event);
    let updatedSelectedItemsArray: Array<CustomModel> = [];

    console.log('Expire Date Value : ', this.expireDate.value);
    this.selectedItemsArray.forEach(itemObject => {
      if (itemObject.itemId == event.data.itemId) {
        console.log('Match found in edit : ', itemObject);

        if (Number(event.newData.acceptedQty) + Number(event.newData.rejectedQty) != Number(event.newData.qty)) {
          Swal.fire('Warning', 'Please validate your inputs', 'warning');
          updatedSelectedItemsArray.push({
            itemId: event.newData.itemId,
            itemName: event.data.itemName,
            expireDate: event.data.doexpire,
            qty: event.newData.qty,
          });
        } else if (this.expireDate.value == null) {
          Swal.fire('Warning', 'Please select expire date', 'warning');
          updatedSelectedItemsArray.push({
            itemId: event.newData.itemId,
            itemName: event.data.itemName,
            expireDate: event.data.doexpire,
            qty: event.newData.qty,
          });
        } else {
          updatedSelectedItemsArray.push({
            itemId: event.newData.itemId,
            itemName: event.data.itemName,
            expireDate: this.dateService.format(this.expireDate.value, 'yyyy-MM-dd'),
            qty: event.newData.qty,
            acceptedQty: event.newData.acceptedQty,
            rejectedQty: event.newData.rejectedQty,
          });
        }
      } else {
        updatedSelectedItemsArray.push(itemObject);
      }
    });

    this.selectedItemsArray = updatedSelectedItemsArray;
    this.source.load(updatedSelectedItemsArray);
  }

  onDeleteConfirm(event) {
    Swal.fire('Warning', 'This function is disabled', 'warning');
  }

  onCreateConfirm(event) {
    Swal.fire('Warning', 'This function is disabled', 'warning');
  }

  submit() {
    console.log('Item Array :', this.selectedItemsArray);
    this.selectedItemsArray.forEach(updatedItemDetails => {
      if (!updatedItemDetails.acceptedQty || !updatedItemDetails.rejectedQty) {
        Swal.fire('Warning', 'Please update all item details', 'warning');
      }
    });
    this.changeEvent.emit(this.selectedItemsArray);
  }
}

interface CustomModel {
  itemId?: number;
  itemName?: string;
  expireDate?: string;
  qty?: number;
  acceptedQty?: number;
  rejectedQty?: number;
}
