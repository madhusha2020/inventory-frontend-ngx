var ApiModule_1;
import { __decorate, __metadata, __param } from "tslib";
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';
import { CustomerControllerService } from './api/customerController.service';
import { ItemControllerService } from './api/itemController.service';
import { OrderControllerService } from './api/orderController.service';
import { AuthenticationControllerService } from './api/authenticationController.service';
import { RoleControllerService } from './api/roleController.service';
import { UserControllerService } from './api/userController.service';
let ApiModule = ApiModule_1 = class ApiModule {
    static forRoot(configurationFactory) {
        return {
            ngModule: ApiModule_1,
            providers: [{ provide: Configuration, useFactory: configurationFactory }],
        };
    }
    constructor(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
};
ApiModule = ApiModule_1 = __decorate([
    NgModule({
        imports: [],
        declarations: [],
        exports: [],
        providers: [
            AuthenticationControllerService,
            CustomerControllerService,
            ItemControllerService,
            OrderControllerService,
            RoleControllerService,
            UserControllerService
        ],
    }),
    __param(0, Optional()), __param(0, SkipSelf()),
    __param(1, Optional()),
    __metadata("design:paramtypes", [ApiModule,
        HttpClient])
], ApiModule);
export { ApiModule };
//# sourceMappingURL=api.module.js.map