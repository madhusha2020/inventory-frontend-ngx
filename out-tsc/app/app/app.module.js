import { __decorate } from "tslib";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NbChatModule, NbDatepickerModule, NbDialogModule, NbMenuModule, NbSidebarModule, NbToastrModule, NbWindowModule, } from '@nebular/theme';
import { ApiModule, Configuration } from './service/rest';
import { environment } from '../environments/environment';
export function apiConfiguration() {
    const params = {
        basePath: environment.basePath,
    };
    return new Configuration(params);
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [AppComponent],
        imports: [
            ApiModule.forRoot(apiConfiguration),
            BrowserModule,
            BrowserAnimationsModule,
            HttpClientModule,
            AppRoutingModule,
            NbSidebarModule.forRoot(),
            NbMenuModule.forRoot(),
            NbDatepickerModule.forRoot(),
            NbDialogModule.forRoot(),
            NbWindowModule.forRoot(),
            NbToastrModule.forRoot(),
            NbChatModule.forRoot({
                messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
            }),
            CoreModule.forRoot(),
            ThemeModule.forRoot(),
        ],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map