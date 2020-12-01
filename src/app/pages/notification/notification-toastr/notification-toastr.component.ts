import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrConfig,
  NbToastrService
} from '@nebular/theme';
import {TokenService} from '../../../service/auth/token.service';
import {NotificationControllerService} from '../../../service/rest';
import {Observable, Subscription} from 'rxjs';
import 'rxjs-compat/add/observable/interval';
import {NotificationService} from '../../../service/notification/notification.service';

@Component({
  selector: 'app-notification-toastr',
  templateUrl: './notification-toastr.component.html',
  styleUrls: ['./notification-toastr.component.scss']
})
export class NotificationToastrComponent implements OnInit, OnDestroy {

  config: NbToastrConfig;

  sub: Subscription;

  index = 1;
  destroyByClick = true;
  duration = 3000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'success';

  constructor(private tokenService: TokenService,
              private notificationService: NotificationService,
              private toastrService: NbToastrService,
              private notificationControllerService: NotificationControllerService) {
  }

  ngOnInit(): void {
    this.notificationThread();
  }

  notificationThread() {
    this.sub = Observable.interval(50000).subscribe((val) => {
      if (this.tokenService.isLoggedIn()) {
        this.makeNewNotificationToast();
        this.makeAwaitingNotificationCount();
      }
    });
  }

  makeNewNotificationToast() {
    this.notificationControllerService.getNewNotificationsByUserUsingPOST({userId: this.tokenService.getUserName()}).subscribe(response => {
      console.log('New Notification response :', response);
      response.notificationList.forEach(notification => {
        this.showToast(this.status, notification.type, notification.message);
      });
    });
  }

  makeAwaitingNotificationCount() {
    this.notificationControllerService.getAwaitingNotificationsByUserUsingPOST({userId: this.tokenService.getUserName()}).subscribe(response => {
      console.log('Awaiting Notification response :', response);
      this.notificationService.setAlertCount(response.notificationList.length);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }
}
