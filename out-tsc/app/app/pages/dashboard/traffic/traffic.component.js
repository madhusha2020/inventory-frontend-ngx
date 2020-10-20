import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { TrafficChartData } from '../../../@core/data/traffic-chart';
let TrafficComponent = class TrafficComponent {
    constructor(themeService, trafficChartService) {
        this.themeService = themeService;
        this.trafficChartService = trafficChartService;
        this.alive = true;
        this.type = 'month';
        this.types = ['week', 'month', 'year'];
        this.themeService.getJsTheme()
            .pipe(takeWhile(() => this.alive))
            .subscribe(theme => {
            this.currentTheme = theme.name;
        });
        this.trafficChartService.getTrafficChartData()
            .pipe(takeWhile(() => this.alive))
            .subscribe((data) => {
            this.trafficChartPoints = data;
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
TrafficComponent = __decorate([
    Component({
        selector: 'ngx-traffic',
        styleUrls: ['./traffic.component.scss'],
        template: `
    <nb-card size="tiny">
      <nb-card-header>
        <span>Traffic Consumption</span>

        <nb-select [(selected)]="type">
          <nb-option *ngFor="let t of types" [value]="t">{{ t }}</nb-option>
        </nb-select>
      </nb-card-header>

      <ngx-traffic-chart [points]="trafficChartPoints"></ngx-traffic-chart>
    </nb-card>
  `,
    }),
    __metadata("design:paramtypes", [NbThemeService,
        TrafficChartData])
], TrafficComponent);
export { TrafficComponent };
//# sourceMappingURL=traffic.component.js.map