import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationControllerService } from '../rest';
const helper = new JwtHelperService();
let TokenService = class TokenService {
    constructor(authenticationControllerService) {
        this.authenticationControllerService = authenticationControllerService;
        this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        // TODO: rebuild user from validated token here to avoid localstorage tampering
        return this.currentUserSubject.value;
    }
    login(user) {
        return this.authenticationControllerService.loginUsingPOST(user).subscribe(response => {
            let userResponse;
            if (response && response.token) {
                let decodedToken = helper.decodeToken(response.token);
                // Build up a user
                user.token = response.token;
                user.userName = decodedToken.sub;
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
        });
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
};
TokenService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [AuthenticationControllerService])
], TokenService);
export { TokenService };
//# sourceMappingURL=token.service.js.map