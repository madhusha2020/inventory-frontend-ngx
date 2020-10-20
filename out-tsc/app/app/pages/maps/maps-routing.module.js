import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MapsComponent } from './maps.component';
import { GmapsComponent } from './gmaps/gmaps.component';
import { LeafletComponent } from './leaflet/leaflet.component';
import { BubbleMapComponent } from './bubble/bubble-map.component';
import { SearchMapComponent } from './search-map/search-map.component';
import { MapComponent } from './search-map/map/map.component';
import { SearchComponent } from './search-map/search/search.component';
const routes = [{
        path: '',
        component: MapsComponent,
        children: [{
                path: 'gmaps',
                component: GmapsComponent,
            }, {
                path: 'leaflet',
                component: LeafletComponent,
            }, {
                path: 'bubble',
                component: BubbleMapComponent,
            }, {
                path: 'searchmap',
                component: SearchMapComponent,
            }],
    }];
let MapsRoutingModule = class MapsRoutingModule {
};
MapsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], MapsRoutingModule);
export { MapsRoutingModule };
export const routedComponents = [
    MapsComponent,
    GmapsComponent,
    LeafletComponent,
    BubbleMapComponent,
    SearchMapComponent,
    MapComponent,
    SearchComponent,
];
//# sourceMappingURL=maps-routing.module.js.map