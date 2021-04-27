import {Injectable} from '@angular/core';
import {Constant} from '../auth/constant';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {
  }

  clearAlertCount(): void {
    sessionStorage.removeItem(Constant.ALERT_COUNT);
  }

  setAlertCount(count: number): void {
      sessionStorage.setItem(Constant.ALERT_COUNT, String(count));
  }

  getAlertCount(): number {
    return Number(sessionStorage.getItem(Constant.ALERT_COUNT));
  }
}
