import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import {NotificationComponent} from './notification.component';
import { NotificationMainComponent } from './notification-main/notification-main.component';


@NgModule({
  declarations: [NotificationComponent, NotificationMainComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule
  ]
})
export class NotificationModule { }
