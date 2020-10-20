import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let ChartPanelSummaryComponent = class ChartPanelSummaryComponent {
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], ChartPanelSummaryComponent.prototype, "summary", void 0);
ChartPanelSummaryComponent = __decorate([
    Component({
        selector: 'ngx-chart-panel-summary',
        styleUrls: ['./chart-panel-summary.component.scss'],
        template: `
    <div class="summary-container">
      <div *ngFor="let item of summary">
        <div>{{ item.title }}</div>
        <div class="h6">{{ item.value }}</div>
      </div>
    </div>
  `,
    })
], ChartPanelSummaryComponent);
export { ChartPanelSummaryComponent };
//# sourceMappingURL=chart-panel-summary.component.js.map