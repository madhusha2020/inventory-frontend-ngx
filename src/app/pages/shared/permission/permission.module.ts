import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthUiHidePermissionDirective} from './auth-ui-hide-permission.directive';



@NgModule({
  declarations: [AuthUiHidePermissionDirective],
  imports: [
    CommonModule
  ],
  exports: [
    AuthUiHidePermissionDirective
  ]
})
export class PermissionModule { }
