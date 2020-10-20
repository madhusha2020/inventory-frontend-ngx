import { __decorate, __metadata } from "tslib";
import { Component, Output, EventEmitter, ElementRef } from '@angular/core';
import { LocationStrategy } from '@angular/common';
let TinyMCEComponent = class TinyMCEComponent {
    constructor(host, locationStrategy) {
        this.host = host;
        this.locationStrategy = locationStrategy;
        this.editorKeyup = new EventEmitter();
    }
    ngAfterViewInit() {
        tinymce.init({
            target: this.host.nativeElement,
            plugins: ['link', 'paste', 'table'],
            skin_url: `${this.locationStrategy.getBaseHref()}assets/skins/lightgray`,
            setup: editor => {
                this.editor = editor;
                editor.on('keyup', () => {
                    this.editorKeyup.emit(editor.getContent());
                });
            },
            height: '320',
        });
    }
    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], TinyMCEComponent.prototype, "editorKeyup", void 0);
TinyMCEComponent = __decorate([
    Component({
        selector: 'ngx-tiny-mce',
        template: '',
    }),
    __metadata("design:paramtypes", [ElementRef,
        LocationStrategy])
], TinyMCEComponent);
export { TinyMCEComponent };
//# sourceMappingURL=tiny-mce.component.js.map