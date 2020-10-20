import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartsComponent } from './charts.component';
import { EchartsComponent } from './echarts/echarts.component';
import { D3Component } from './d3/d3.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
const routes = [{
        path: '',
        component: ChartsComponent,
        children: [{
                path: 'echarts',
                component: EchartsComponent,
            }, {
                path: 'd3',
                component: D3Component,
            }, {
                path: 'chartjs',
                component: ChartjsComponent,
            }],
    }];
let ChartsRoutingModule = class ChartsRoutingModule {
};
ChartsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ChartsRoutingModule);
export { ChartsRoutingModule };
export const routedComponents = [
    ChartsComponent,
    EchartsComponent,
    D3Component,
    ChartjsComponent,
];
//# sourceMappingURL=charts-routing.module.js.map