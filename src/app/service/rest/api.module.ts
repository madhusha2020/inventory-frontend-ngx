import {NgModule, Optional, SkipSelf} from '@angular/core';
import {Configuration} from './configuration';
import {HttpClient} from '@angular/common/http';
import {CustomerControllerService} from './api/customerController.service';
import { ComplainControllerService } from './api/complainController.service';
import {ItemControllerService} from './api/itemController.service';
import {OrderControllerService} from './api/orderController.service';
import {AuthenticationControllerService} from './api/authenticationController.service';
import {RoleControllerService} from './api/roleController.service';
import {UserControllerService} from './api/userController.service';
import {EmployeeControllerService} from './api/employeeController.service';
import {ImageUploadControllerService} from './api/imageUploadController.service';
import {ProductOutboundControllerService} from './api/productOutboundController.service';
import {ProductInboundControllerService} from './api/productInboundController.service';
import {DeliveryControllerService} from './api/deliveryController.service';
import {SaleControllerService} from './api/saleController.service';
import {NotificationControllerService} from './api/notificationController.service';
import {DiscountControllerService} from './api/discountController.service';
import {DisposalControllerService} from './api/disposalController.service';
import {InventoryControllerService} from './api/inventoryController.service';
import {VehicleControllerService} from './api/vehicleController.service';
import {SupplierControllerService} from './api/supplierController.service';
import {SupplierPaymentControllerService} from './api/supplierPaymentController.service';
import {CustomerPaymentControllerService} from './api/customerPaymentController.service';
import {ChemicalTestControllerService} from './api/chemicalTestController.service';
import {PurchaseOrderControllerService} from './api/purchaseOrderController.service';
import {PurchaseControllerService} from './api/purchaseController.service';
import { SupplierRefundControllerService } from './api/supplierRefundController.service';
import { SupplierReturnControllerService } from './api/supplierReturnController.service';
import { ReportControllerService } from './api/reportController.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
	AuthenticationControllerService,
    ChemicalTestControllerService,
    ComplainControllerService,
    CustomerControllerService,
    CustomerPaymentControllerService,
    DeliveryControllerService,
    DiscountControllerService,
    DisposalControllerService,
    EmployeeControllerService,
    ImageUploadControllerService,
    InventoryControllerService,
    ItemControllerService,
    NotificationControllerService,
    OrderControllerService,
    ProductInboundControllerService,
    ProductOutboundControllerService,
    PurchaseControllerService,
    PurchaseOrderControllerService,
    RoleControllerService,
    SaleControllerService,
    SupplierControllerService,
    SupplierPaymentControllerService,
    SupplierRefundControllerService,
    SupplierReturnControllerService,
    UserControllerService,
    VehicleControllerService,
	ReportControllerService
  ]
})
export class ApiModule {
  constructor(@Optional() @SkipSelf() parentModule: ApiModule,
              @Optional() http: HttpClient) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
        'See also https://github.com/angular/angular/issues/20575');
    }
  }

  public static forRoot(configurationFactory: () => Configuration) {
    return {
      ngModule: ApiModule,
      providers: [{provide: Configuration, useFactory: configurationFactory}],
    };
  }
}
