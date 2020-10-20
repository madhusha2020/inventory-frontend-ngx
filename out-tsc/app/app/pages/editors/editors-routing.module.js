import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditorsComponent } from './editors.component';
import { TinyMCEComponent } from './tiny-mce/tiny-mce.component';
import { CKEditorComponent } from './ckeditor/ckeditor.component';
const routes = [{
        path: '',
        component: EditorsComponent,
        children: [{
                path: 'tinymce',
                component: TinyMCEComponent,
            }, {
                path: 'ckeditor',
                component: CKEditorComponent,
            }],
    }];
let EditorsRoutingModule = class EditorsRoutingModule {
};
EditorsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], EditorsRoutingModule);
export { EditorsRoutingModule };
export const routedComponents = [
    EditorsComponent,
    TinyMCEComponent,
    CKEditorComponent,
];
//# sourceMappingURL=editors-routing.module.js.map