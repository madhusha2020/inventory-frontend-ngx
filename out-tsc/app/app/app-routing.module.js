import { __decorate } from "tslib";
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './service/auth/auth-guard.service';
export const routes = [
    {
        path: 'pages',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    },
    {
        path: 'auth',
        loadChildren: () => import('./service/auth/auth.module').then(m => m.AuthModule),
    },
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' },
];
const config = {
    useHash: false,
};
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes, config)],
        exports: [RouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map