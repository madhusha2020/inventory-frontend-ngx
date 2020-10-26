import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorListComponent } from './error-list/error-list.component';



@NgModule({
  declarations: [ErrorListComponent],
  exports: [
    ErrorListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormValidationModule { }
