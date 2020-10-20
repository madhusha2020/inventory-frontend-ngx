import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';
let LeafletComponent = class LeafletComponent {
    constructor() {
        this.options = {
            layers: [
                L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
            ],
            zoom: 5,
            center: L.latLng({ lat: 38.991709, lng: -76.886109 }),
        };
    }
};
LeafletComponent = __decorate([
    Component({
        selector: 'ngx-leaflet',
        styleUrls: ['./leaflet.component.scss'],
        template: `
    <nb-card>
      <nb-card-header>Leaflet Maps</nb-card-header>
      <nb-card-body>
        <div leaflet [leafletOptions]="options"></div>
      </nb-card-body>
    </nb-card>
  `,
    })
], LeafletComponent);
export { LeafletComponent };
//# sourceMappingURL=leaflet.component.js.map