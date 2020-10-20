import { __decorate, __metadata } from "tslib";
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { WindowFormComponent } from './window-form/window-form.component';
let WindowComponent = class WindowComponent {
    constructor(windowService) {
        this.windowService = windowService;
    }
    openWindow(contentTemplate) {
        this.windowService.open(contentTemplate, {
            title: 'Window content from template',
            context: {
                text: 'some text to pass into template',
            },
        });
    }
    openWindowForm() {
        this.windowService.open(WindowFormComponent, { title: `Window` });
    }
    openWindowWithoutBackdrop() {
        this.windowService.open(this.disabledEscTemplate, {
            title: 'Window without backdrop',
            hasBackdrop: false,
            closeOnEsc: false,
        });
    }
};
__decorate([
    ViewChild('contentTemplate', { static: true }),
    __metadata("design:type", TemplateRef)
], WindowComponent.prototype, "contentTemplate", void 0);
__decorate([
    ViewChild('disabledEsc', { read: TemplateRef, static: true }),
    __metadata("design:type", TemplateRef)
], WindowComponent.prototype, "disabledEscTemplate", void 0);
WindowComponent = __decorate([
    Component({
        selector: 'ngx-window',
        templateUrl: 'window.component.html',
        styleUrls: ['window.component.scss'],
    }),
    __metadata("design:paramtypes", [NbWindowService])
], WindowComponent);
export { WindowComponent };
//# sourceMappingURL=window.component.js.map