import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AuthRoutingModule} from './auth-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuardService} from './auth-guard.service';
import {TokenService} from './token.service';
import {NbAlertModule, NbCardModule, NbCheckboxModule, NbInputModule} from '@nebular/theme';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AuthRoutingModule,
    HttpClientModule,
    NbCardModule,
    NbAlertModule,
    NbInputModule,
    NbCheckboxModule,
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
