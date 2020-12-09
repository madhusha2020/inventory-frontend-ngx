import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthPermissionDirective} from './directives/auth-permission.directive';
import {AuthUiHidePermissionDirective} from './directives/auth-ui-hide-permission.directive';



@NgModule({
  declarations: [AuthPermissionDirective, AuthUiHidePermissionDirective],
  imports: [
    CommonModule
  ],
  exports: [AuthPermissionDirective, AuthUiHidePermissionDirective]
})
export class PermissionModule { }
