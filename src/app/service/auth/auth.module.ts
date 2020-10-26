import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AuthRoutingModule} from './auth-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuardService} from './auth-guard.service';
import {TokenService} from './token.service';
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbSpinnerModule
} from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import {NbAuthModule} from '@nebular/auth';
import {FormInputModule} from '../../pages/shared/form-inputs/form-input.module';

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
    NbAuthModule,
    ReactiveFormsModule,
    FormInputModule,
    NbSpinnerModule,
    NbButtonModule,
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
