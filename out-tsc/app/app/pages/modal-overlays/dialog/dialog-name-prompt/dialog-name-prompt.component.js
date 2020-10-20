import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
let DialogNamePromptComponent = class DialogNamePromptComponent {
    constructor(ref) {
        this.ref = ref;
    }
    cancel() {
        this.ref.close();
    }
    submit(name) {
        this.ref.close(name);
    }
};
DialogNamePromptComponent = __decorate([
    Component({
        selector: 'ngx-dialog-name-prompt',
        templateUrl: 'dialog-name-prompt.component.html',
        styleUrls: ['dialog-name-prompt.component.scss'],
    }),
    __metadata("design:paramtypes", [NbDialogRef])
], DialogNamePromptComponent);
export { DialogNamePromptComponent };
//# sourceMappingURL=dialog-name-prompt.component.js.map