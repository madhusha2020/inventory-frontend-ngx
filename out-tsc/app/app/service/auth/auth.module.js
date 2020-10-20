import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthGuardService } from './auth-guard.service';
import { TokenService } from './token.service';
import { LoginComponent } from './login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            RouterModule,
            AuthRoutingModule,
            HttpClientModule,
            JwtModule.forRoot({
                config: {
                    allowedDomains: ['localhost:8080'],
                    disallowedRoutes: ['http://localhost:8080/authentication/login', 'http://localhost:8080/authentication/register'],
                    tokenGetter: () => {
                        return localStorage.getItem('access_token');
                    },
                },
            }),
        ],
        declarations: [
            LoginComponent
        ],
        providers: [
            AuthGuardService,
            TokenService,
        ],
    })
], AuthModule);
export { AuthModule };
//# sourceMappingURL=auth.module.js.map