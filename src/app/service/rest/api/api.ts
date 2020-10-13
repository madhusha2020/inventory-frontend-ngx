export * from './customerController.service';
import { CustomerControllerService } from './customerController.service';
export * from './itemController.service';
import { ItemControllerService } from './itemController.service';
export * from './orderController.service';
import { OrderControllerService } from './orderController.service';
export const APIS = [CustomerControllerService, ItemControllerService, OrderControllerService];
