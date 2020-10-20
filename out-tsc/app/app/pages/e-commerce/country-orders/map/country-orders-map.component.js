import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as L from 'leaflet';
import { CountryOrdersMapService } from './country-orders-map.service';
import { NbThemeService } from '@nebular/theme';
import { combineLatest } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
let CountryOrdersMapComponent = class CountryOrdersMapComponent {
    constructor(ecMapService, theme) {
        this.ecMapService = ecMapService;
        this.theme = theme;
        this.select = new EventEmitter();
        this.layers = [];
        this.alive = true;
        this.options = {
            zoom: 2,
            minZoom: 2,
            maxZoom: 6,
            zoomControl: false,
            center: L.latLng({ lat: 38.991709, lng: -76.886109 }),
            maxBounds: new L.LatLngBounds(new L.LatLng(-89.98155760646617, -180), new L.LatLng(89.99346179538875, 180)),
            maxBoundsViscosity: 1.0,
        };
        combineLatest([
            this.ecMapService.getCords(),
            this.theme.getJsTheme(),
        ])
            .pipe(takeWhile(() => this.alive))
            .subscribe(([cords, config]) => {
            this.currentTheme = config.variables.countryOrders;
            this.layers = [this.createGeoJsonLayer(cords)];
            this.selectFeature(this.findFeatureLayerByCountryId(this.countryId));
        });
    }
    mapReady(map) {
        map.addControl(L.control.zoom({ position: 'bottomright' }));
        // fix the map fully displaying, existing leaflet bag
        setTimeout(() => {
            map.invalidateSize();
        }, 0);
    }
    createGeoJsonLayer(cords) {
        return L.geoJSON(cords, {
            style: () => ({
                weight: this.currentTheme.countryBorderWidth,
                fillColor: this.currentTheme.countryFillColor,
                fillOpacity: 1,
                color: this.currentTheme.countryBorderColor,
                opacity: 1,
            }),
            onEachFeature: (f, l) => {
                this.onEachFeature(f, l);
            },
        });
    }
    onEachFeature(feature, layer) {
        layer.on({
            mouseover: (e) => this.highlightFeature(e.target),
            mouseout: (e) => this.moveout(e.target),
            click: (e) => this.selectFeature(e.target),
        });
    }
    highlightFeature(featureLayer) {
        if (featureLayer) {
            featureLayer.setStyle({
                weight: this.currentTheme.hoveredCountryBorderWidth,
                fillColor: this.currentTheme.hoveredCountryFillColor,
                color: this.currentTheme.hoveredCountryBorderColor,
            });
            if (!L.Browser.ie && !L.Browser.opera12 && !L.Browser.edge) {
                featureLayer.bringToFront();
            }
        }
    }
    moveout(featureLayer) {
        if (featureLayer !== this.selectedCountry) {
            this.resetHighlight(featureLayer);
            // When countries have common border we should highlight selected country once again
            this.highlightFeature(this.selectedCountry);
        }
    }
    resetHighlight(featureLayer) {
        if (featureLayer) {
            const geoJsonLayer = this.layers[0];
            geoJsonLayer.resetStyle(featureLayer);
        }
    }
    selectFeature(featureLayer) {
        if (featureLayer !== this.selectedCountry) {
            this.resetHighlight(this.selectedCountry);
            this.highlightFeature(featureLayer);
            this.selectedCountry = featureLayer;
            this.select.emit(featureLayer.feature.properties.name);
        }
    }
    findFeatureLayerByCountryId(id) {
        const layers = this.layers[0].getLayers();
        const featureLayer = layers.find(item => {
            return item.feature.id === id;
        });
        return featureLayer ? featureLayer : null;
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], CountryOrdersMapComponent.prototype, "countryId", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CountryOrdersMapComponent.prototype, "select", void 0);
CountryOrdersMapComponent = __decorate([
    Component({
        selector: 'ngx-country-orders-map',
        styleUrls: ['./country-orders-map.component.scss'],
        template: `
    <div leaflet [leafletOptions]="options" [leafletLayers]="layers" (leafletMapReady)="mapReady($event)"></div>
  `,
    }),
    __metadata("design:paramtypes", [CountryOrdersMapService,
        NbThemeService])
], CountryOrdersMapComponent);
export { CountryOrdersMapComponent };
//# sourceMappingURL=country-orders-map.component.js.map