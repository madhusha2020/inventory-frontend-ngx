import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
let ShowcaseDialogComponent = class ShowcaseDialogComponent {
    constructor(ref) {
        this.ref = ref;
    }
    dismiss() {
        this.ref.close();
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ShowcaseDialogComponent.prototype, "title", void 0);
ShowcaseDialogComponent = __decorate([
    Component({
        selector: 'ngx-showcase-dialog',
        templateUrl: 'showcase-dialog.component.html',
        styleUrls: ['showcase-dialog.component.scss'],
    }),
    __metadata("design:paramtypes", [NbDialogRef])
], ShowcaseDialogComponent);
export { ShowcaseDialogComponent };
//# sourceMappingURL=showcase-dialog.component.js.map