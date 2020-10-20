import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { PositionModel } from '../entity/position.model';
let MapComponent = class MapComponent {
    constructor() {
        this.position = null;
        this.zoom = 1;
    }
    set searchedPosition(position) {
        if (position) {
            this.position = position;
            this.zoom = 12;
        }
    }
    ngOnInit() {
        // set up current location
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.searchedPosition = new PositionModel(position.coords.latitude, position.coords.longitude);
            });
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", PositionModel),
    __metadata("design:paramtypes", [PositionModel])
], MapComponent.prototype, "searchedPosition", null);
MapComponent = __decorate([
    Component({
        selector: 'ngx-map',
        templateUrl: './map.component.html',
        styleUrls: ['./map.component.scss'],
    })
], MapComponent);
export { MapComponent };
//# sourceMappingURL=map.component.js.map