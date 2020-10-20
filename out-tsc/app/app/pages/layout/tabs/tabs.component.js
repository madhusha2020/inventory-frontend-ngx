import { __decorate } from "tslib";
import { Component } from '@angular/core';
let Tab1Component = class Tab1Component {
};
Tab1Component = __decorate([
    Component({
        selector: 'ngx-tab1',
        template: `
    <p>Early home automation began with labor-saving machines. Self-contained electric or gas powered
      <a target="_blank" href="https://en.wikipedia.org/wiki/Home_appliances">home appliances</a>
      became viable in the 1900s with the introduction of
      <a target="_blank" href="https://en.wikipedia.org/wiki/Electric_power_distribution">electric power distribution
      </a> and led to the introduction of washing machines (1904), water heaters (1889), refrigerators, sewing machines,
      dishwashers, and clothes dryers.
    </p>
  `,
    })
], Tab1Component);
export { Tab1Component };
let Tab2Component = class Tab2Component {
};
Tab2Component = __decorate([
    Component({
        selector: 'ngx-tab2',
        template: `
    <p>Tab 2 works!</p>
  `,
    })
], Tab2Component);
export { Tab2Component };
let TabsComponent = class TabsComponent {
    constructor() {
        this.tabs = [
            {
                title: 'Route tab #1',
                route: '/pages/layout/tabs/tab1',
            },
            {
                title: 'Route tab #2',
                route: '/pages/layout/tabs/tab2',
            },
        ];
    }
};
TabsComponent = __decorate([
    Component({
        selector: 'ngx-tabs',
        styleUrls: ['./tabs.component.scss'],
        templateUrl: './tabs.component.html',
    })
], TabsComponent);
export { TabsComponent };
//# sourceMappingURL=tabs.component.js.map