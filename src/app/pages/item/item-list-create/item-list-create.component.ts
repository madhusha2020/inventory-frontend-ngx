import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DisposalInventory} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item-list-create',
  templateUrl: './item-list-create.component.html',
  styleUrls: ['./item-list-create.component.scss']
})
export class ItemListCreateComponent implements OnInit {

  @Input() parentFormIsValid: boolean;
  @Output() changeEvent = new EventEmitter<any>();

  dummyForm: FormGroup;
  selectedItemsArray: Array<CustomModel> = [];
  selectedItemsMap: Map<number, number> = new Map<number, number>();

  settings = {
    pager: {
      display: true,
      perPage: 4
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
      tableItemId: {
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
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private formBuilder: FormBuilder) {
  }

  get itemId() {
    return this.dummyForm.get('itemId');
  }

  get tableItemId() {
    return this.dummyForm.get('tableItemId');
  }

  get qty() {
    return this.dummyForm.get('qty');
  }

  ngOnInit() {
    this.dummyForm = this.formBuilder.group({
      itemId: [null, [Validators.required]],
      tableItemId: [null, [Validators.required]],
      qty: [null, [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$'), Validators.minLength(1), Validators.maxLength(4)]],
    });

    this.source.load(this.selectedItemsArray);
  }

  itemStateChange(event) {
    console.log('itemStateChange', event);
    this.tableItemId.setValue(event);
  }

  add() {
    let object = this.itemId.value.split(' - ');
    if (this.selectedItemsMap.has(this.tableItemId.value)) {
      console.log('This item is already added :', this.tableItemId.value);
      Swal.fire('Warning', 'This item is already added', 'warning');
    } else {
      this.selectedItemsMap.set(this.tableItemId.value, this.qty.value);
      this.selectedItemsArray.push({itemId: this.tableItemId.value, itemName: object[1], qty: this.qty.value});
    }
    console.log('add', this.selectedItemsArray);
    this.source.refresh();
  }

  onSaveConfirm(event) {
    console.log('Edit', event);
    let updatedSelectedItemsArray: Array<CustomModel> = [];

    this.selectedItemsArray.forEach(disposalInventory => {
      if (disposalInventory.itemId == event.data.tableItemId) {
        console.log('Match found in edit : ', disposalInventory);
        updatedSelectedItemsArray.push({
          itemId: event.newData.tableItemId,
          itemName: event.data.itemName,
          qty: event.newData.qty
        });
      } else {
        updatedSelectedItemsArray.push(disposalInventory);
      }
    });

    this.selectedItemsArray = updatedSelectedItemsArray;
    this.source.load(updatedSelectedItemsArray);
  }

  onDeleteConfirm(event) {
    console.log('Delete', event);
    let updatedSelectedItemsArray: Array<CustomModel> = [];

    this.selectedItemsArray.forEach(disposalInventory => {
      if (disposalInventory.itemId == event.data.tableItemId) {
        console.log('Match found in delete : ', disposalInventory);
      } else {
        updatedSelectedItemsArray.push(disposalInventory);
      }
    });
    this.selectedItemsMap.delete(event.data.tableItemId);

    this.selectedItemsArray = updatedSelectedItemsArray;
    this.source.load(updatedSelectedItemsArray);
  }

  onCreateConfirm(event) {
    Swal.fire('Warning', 'Please use above form to add items', 'warning');
  }

  submit() {
    console.log('Item Array :', this.selectedItemsArray);
    this.changeEvent.emit(this.selectedItemsArray);
  }
}

interface CustomModel {
  mainId?: number;
  itemId?: number;
  itemName?: string;
  qty?: number;
}

