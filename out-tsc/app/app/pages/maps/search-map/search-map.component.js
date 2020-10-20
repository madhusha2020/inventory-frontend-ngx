import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { PositionModel } from './entity/position.model';
let SearchMapComponent = class SearchMapComponent {
    constructor() {
        this.searchedPosition = new PositionModel();
    }
    setPosition(position) {
        this.searchedPosition = position;
    }
};
SearchMapComponent = __decorate([
    Component({
        selector: 'ngx-search-map',
        templateUrl: './search-map.component.html',
    })
], SearchMapComponent);
export { SearchMapComponent };
//# sourceMappingURL=search-map.component.js.map