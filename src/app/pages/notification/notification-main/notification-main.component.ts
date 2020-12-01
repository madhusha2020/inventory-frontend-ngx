import { Component, OnInit } from '@angular/core';
import {Notification, NotificationControllerService} from '../../../service/rest';
import {LocalDataSource} from 'ng2-smart-table';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';
import {ServiceUtil} from '../../../service/util/service-util';
import {TokenService} from '../../../service/auth/token.service';
import {NotificationService} from '../../../service/notification/notification.service';

@Component({
  selector: 'ngx-notification-main',
  templateUrl: './notification-main.component.html',
  styleUrls: ['./notification-main.component.scss']
})
export class NotificationMainComponent implements OnInit {

  notifications: Array<Notification> = [];

  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      id: {
        title: '#Notification',
        type: 'number',
      },
      type: {
        title: 'Notification Title',
        type: 'string',
      },
      message: {
        title: 'Notification Content',
        type: 'string',
      },
      dosend: {
        title: 'Send Date',
        type: 'string',
      },
      statusDescription: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private notificationControllerService: NotificationControllerService,
              private notificationService: NotificationService,
              private tokenService: TokenService,
              private searchService: NbSearchService,
              private router: Router) {

    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        console.log('Search', data.term);
        this.source.setFilter([
          {
            field: 'name',
            search: data.term
          }
        ], false);
      });
  }

  ngOnInit(): void {
    this.fetchNotifications();
    this.notificationService.clearAlertCount();
  }

  fetchNotifications() {
    this.notificationControllerService.getNotificationsByUserUsingPOST({userId: this.tokenService.getUserName()}).subscribe(response => {
      console.log('Notification Data :', response);
      response.notificationList.forEach(notification => {
        notification.statusDescription = ServiceUtil.getStatusDescription(notification.status);
        this.notifications.push(notification);
      });
      this.source.load(this.notifications);
    });
  }

  onUserRowSelect(event): void {
    console.log(event);
    this.router.navigate(['/pages/notification/view'], {queryParams: {id: event.data.id}});
  }

  resetFilter(): void {
    this.source.setFilter([]);
  }
}

