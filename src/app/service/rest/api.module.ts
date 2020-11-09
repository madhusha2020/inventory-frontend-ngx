import { NgModule, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';
import { CustomerControllerService } from './api/customerController.service';
import { ItemControllerService } from './api/itemController.service';
import { OrderControllerService } from './api/orderController.service';
import {AuthenticationControllerService} from './api/authenticationController.service';
import {RoleControllerService} from './api/roleController.service';
import {UserControllerService} from './api/userController.service';
import {EmployeeControllerService} from './api/employeeController.service';
import {ImageUploadControllerService} from './api/imageUploadController.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AuthenticationControllerService,
    CustomerControllerService,
    EmployeeControllerService,
    ImageUploadControllerService,
    ItemControllerService,
    OrderControllerService,
    RoleControllerService,
    UserControllerService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration) {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ],
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
