import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbToastrService, } from '@nebular/theme';
let ToastrComponent = class ToastrComponent {
    constructor(toastrService) {
        this.toastrService = toastrService;
        this.index = 1;
        this.destroyByClick = true;
        this.duration = 2000;
        this.hasIcon = true;
        this.position = NbGlobalPhysicalPosition.TOP_RIGHT;
        this.preventDuplicates = false;
        this.status = 'primary';
        this.title = 'HI there!';
        this.content = `I'm cool toaster!`;
        this.types = [
            'primary',
            'success',
            'info',
            'warning',
            'danger',
        ];
        this.positions = [
            NbGlobalPhysicalPosition.TOP_RIGHT,
            NbGlobalPhysicalPosition.TOP_LEFT,
            NbGlobalPhysicalPosition.BOTTOM_LEFT,
            NbGlobalPhysicalPosition.BOTTOM_RIGHT,
            NbGlobalLogicalPosition.TOP_END,
            NbGlobalLogicalPosition.TOP_START,
            NbGlobalLogicalPosition.BOTTOM_END,
            NbGlobalLogicalPosition.BOTTOM_START,
        ];
        this.quotes = [
            { title: null, body: 'We rock at Angular' },
            { title: null, body: 'Titles are not always needed' },
            { title: null, body: 'Toastr rock!' },
        ];
    }
    makeToast() {
        this.showToast(this.status, this.title, this.content);
    }
    openRandomToast() {
        const typeIndex = Math.floor(Math.random() * this.types.length);
        const quoteIndex = Math.floor(Math.random() * this.quotes.length);
        const type = this.types[typeIndex];
        const quote = this.quotes[quoteIndex];
        this.showToast(type, quote.title, quote.body);
    }
    showToast(type, title, body) {
        const config = {
            status: type,
            destroyByClick: this.destroyByClick,
            duration: this.duration,
            hasIcon: this.hasIcon,
            position: this.position,
            preventDuplicates: this.preventDuplicates,
        };
        const titleContent = title ? `. ${title}` : '';
        this.index += 1;
        this.toastrService.show(body, `Toast ${this.index}${titleContent}`, config);
    }
};
ToastrComponent = __decorate([
    Component({
        selector: 'ngx-toastr',
        styleUrls: ['./toastr.component.scss'],
        templateUrl: './toastr.component.html',
    }),
    __metadata("design:paramtypes", [NbToastrService])
], ToastrComponent);
export { ToastrComponent };
//# sourceMappingURL=toastr.component.js.map