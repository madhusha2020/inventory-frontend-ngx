import { __decorate } from "tslib";
import { Component } from '@angular/core';
import './ckeditor.loader';
import 'ckeditor';
let CKEditorComponent = class CKEditorComponent {
};
CKEditorComponent = __decorate([
    Component({
        selector: 'ngx-ckeditor',
        template: `
    <nb-card>
      <nb-card-header>
        CKEditor
      </nb-card-header>
      <nb-card-body>
        <ckeditor [config]="{ extraPlugins: 'divarea', height: '320' }"></ckeditor>
      </nb-card-body>
    </nb-card>
  `,
    })
], CKEditorComponent);
export { CKEditorComponent };
//# sourceMappingURL=ckeditor.component.js.map