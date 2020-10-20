import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ShowcaseDialogComponent } from './showcase-dialog/showcase-dialog.component';
import { DialogNamePromptComponent } from './dialog-name-prompt/dialog-name-prompt.component';
let DialogComponent = class DialogComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.names = [];
    }
    open() {
        this.dialogService.open(ShowcaseDialogComponent, {
            context: {
                title: 'This is a title passed to the dialog component',
            },
        });
    }
    open2(dialog) {
        this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
    }
    open3() {
        this.dialogService.open(DialogNamePromptComponent)
            .onClose.subscribe(name => name && this.names.push(name));
    }
    openWithoutBackdrop(dialog) {
        this.dialogService.open(dialog, {
            context: 'this is some additional data passed to dialog',
            hasBackdrop: false,
        });
    }
    openWithoutBackdropClick(dialog) {
        this.dialogService.open(dialog, {
            context: 'this is some additional data passed to dialog',
            closeOnBackdropClick: false,
        });
    }
    openWithoutEscClose(dialog) {
        this.dialogService.open(dialog, {
            context: 'this is some additional data passed to dialog',
            closeOnEsc: false,
        });
    }
};
DialogComponent = __decorate([
    Component({
        selector: 'ngx-dialog',
        templateUrl: 'dialog.component.html',
        styleUrls: ['dialog.component.scss'],
    }),
    __metadata("design:paramtypes", [NbDialogService])
], DialogComponent);
export { DialogComponent };
//# sourceMappingURL=dialog.component.js.map