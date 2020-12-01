import {Injectable} from '@angular/core';
import {Constant} from '../auth/constant';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {
  }

  clearAlertCount(): void {
    localStorage.removeItem(Constant.ALERT_COUNT);
  }

  setAlertCount(count: number): void {
      localStorage.setItem(Constant.ALERT_COUNT, String(count));
  }

  getAlertCount(): number {
    return Number(localStorage.getItem(Constant.ALERT_COUNT));
  }
}
