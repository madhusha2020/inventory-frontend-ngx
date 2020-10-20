import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExtraComponentsComponent } from './extra-components.component';
import { AlertComponent } from './alert/alert.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { CalendarKitFullCalendarShowcaseComponent } from './calendar-kit/calendar-kit.component';
const routes = [{
        path: '',
        component: ExtraComponentsComponent,
        children: [
            {
                path: 'calendar',
                component: CalendarComponent,
            },
            {
                path: 'progress-bar',
                component: ProgressBarComponent,
            },
            {
                path: 'spinner',
                component: SpinnerComponent,
            },
            {
                path: 'alert',
                component: AlertComponent,
            },
            {
                path: 'calendar-kit',
                component: CalendarKitFullCalendarShowcaseComponent,
            },
            {
                path: 'chat',
                component: ChatComponent,
            },
        ],
    }];
let ExtraComponentsRoutingModule = class ExtraComponentsRoutingModule {
};
ExtraComponentsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ExtraComponentsRoutingModule);
export { ExtraComponentsRoutingModule };
//# sourceMappingURL=extra-components-routing.module.js.map