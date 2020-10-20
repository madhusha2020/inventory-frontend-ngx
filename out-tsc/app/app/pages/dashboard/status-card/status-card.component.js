import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let StatusCardComponent = class StatusCardComponent {
    constructor() {
        this.on = true;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], StatusCardComponent.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], StatusCardComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], StatusCardComponent.prototype, "on", void 0);
StatusCardComponent = __decorate([
    Component({
        selector: 'ngx-status-card',
        styleUrls: ['./status-card.component.scss'],
        template: `
    <nb-card (click)="on = !on" [ngClass]="{'off': !on}">
      <div class="icon-container">
        <div class="icon status-{{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title h5">{{ title }}</div>
        <div class="status paragraph-2">{{ on ? 'ON' : 'OFF' }}</div>
      </div>
    </nb-card>
  `,
    })
], StatusCardComponent);
export { StatusCardComponent };
//# sourceMappingURL=status-card.component.js.map