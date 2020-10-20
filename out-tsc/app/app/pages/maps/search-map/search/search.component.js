import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, EventEmitter, NgZone, Output, ViewChild } from '@angular/core';
import { PositionModel } from '../entity/position.model';
let SearchComponent = class SearchComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.positionChanged = new EventEmitter();
    }
    ngOnInit() {
        const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, { types: ['address'] });
        autocomplete.addListener('place_changed', () => {
            this.ngZone.run(() => {
                // get the place result
                const place = autocomplete.getPlace();
                // verify result
                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }
                this.positionChanged.emit(new PositionModel(place.geometry.location.lat(), place.geometry.location.lng()));
            });
        });
    }
};
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SearchComponent.prototype, "positionChanged", void 0);
__decorate([
    ViewChild('search', { static: true }),
    __metadata("design:type", ElementRef)
], SearchComponent.prototype, "searchElementRef", void 0);
SearchComponent = __decorate([
    Component({
        selector: 'ngx-search',
        templateUrl: './search.component.html',
    }),
    __metadata("design:paramtypes", [NgZone])
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=search.component.js.map