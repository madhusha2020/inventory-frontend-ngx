import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { MapsRoutingModule, routedComponents } from './maps-routing.module';
let MapsModule = class MapsModule {
};
MapsModule = __decorate([
    NgModule({
        imports: [
            ThemeModule,
            GoogleMapsModule,
            LeafletModule.forRoot(),
            MapsRoutingModule,
            NgxEchartsModule,
            NbCardModule,
        ],
        exports: [],
        declarations: [
            ...routedComponents,
        ],
    })
], MapsModule);
export { MapsModule };
//# sourceMappingURL=maps.module.js.map