import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuardService} from './auth-guard.service';
import {TokenService} from './token.service';
import {NbCardModule} from '@nebular/theme';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        AuthRoutingModule,
        HttpClientModule,
        NbCardModule,
    ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthGuardService,
    TokenService,
  ],
})
export class AuthModule {
}
