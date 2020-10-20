import { __decorate, __metadata } from "tslib";
import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';
let NotFoundComponent = class NotFoundComponent {
    constructor(menuService) {
        this.menuService = menuService;
    }
    goToHome() {
        this.menuService.navigateHome();
    }
};
NotFoundComponent = __decorate([
    Component({
        selector: 'ngx-not-found',
        styleUrls: ['./not-found.component.scss'],
        templateUrl: './not-found.component.html',
    }),
    __metadata("design:paramtypes", [NbMenuService])
], NotFoundComponent);
export { NotFoundComponent };
//# sourceMappingURL=not-found.component.js.map