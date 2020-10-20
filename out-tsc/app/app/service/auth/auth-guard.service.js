import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './token.service';
let AuthGuardService = class AuthGuardService {
    constructor(router, tokenService) {
        this.router = router;
        this.tokenService = tokenService;
    }
    canActivate(route, state) {
        // const currentUser = this.tokenService.currentUserValue;
        // if (currentUser) {
        //   return true;
        // } else {
        //   this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        // }
        console.log('USR ', currentUser);
        return true;
    }
};
AuthGuardService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [Router,
        TokenService])
], AuthGuardService);
export { AuthGuardService };
//# sourceMappingURL=auth-guard.service.js.map