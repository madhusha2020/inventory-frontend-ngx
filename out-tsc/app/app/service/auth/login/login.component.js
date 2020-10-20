import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { TokenService } from '../token.service';
let LoginComponent = class LoginComponent {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    ngOnInit() {
    }
    login() {
        let user;
        user.userName = 'admin@wsolution.com';
        user.password = 'admin';
        this.tokenService.login(user);
        console.log('this.tokenService.currentUserValue', this.tokenService.currentUserValue);
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'ngx-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    }),
    __metadata("design:paramtypes", [TokenService])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map