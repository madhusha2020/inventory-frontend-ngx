import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
let SearchInputComponent = class SearchInputComponent {
    constructor() {
        this.search = new EventEmitter();
        this.isInputShown = false;
    }
    showInput() {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    }
    hideInput() {
        this.isInputShown = false;
    }
    onInput(val) {
        this.search.emit(val);
    }
};
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], SearchInputComponent.prototype, "input", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SearchInputComponent.prototype, "search", void 0);
SearchInputComponent = __decorate([
    Component({
        selector: 'ngx-search-input',
        styleUrls: ['./search-input.component.scss'],
        template: `
    <i class="control-icon ion ion-ios-search"
       (click)="showInput()"></i>
    <input placeholder="Type your search request here..."
           #input
           [class.hidden]="!isInputShown"
           (blur)="hideInput()"
           (input)="onInput($event)">
  `,
    })
], SearchInputComponent);
export { SearchInputComponent };
//# sourceMappingURL=search-input.component.js.map