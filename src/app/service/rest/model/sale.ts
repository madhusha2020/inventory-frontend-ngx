/**
 * Water Solution Inventory Spring Boot App
 * Spring Boot REST API
 *
 * OpenAPI spec version: 1.0
 * Contact: watersolution@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Customer } from './customer';
import { CustomerPayment } from './customerPayment';
import { Delivery } from './delivery';
import { Order } from './order';
import { SaleCustomCompound } from './saleCustomCompound';
import { SaleInventory } from './saleInventory';


export interface Sale { 
    code?: string;
    contact1?: string;
    createdby?: string;
    createddate?: Date;
    customer?: Customer;
    customerPayment?: CustomerPayment;
    date?: string;
    delivery?: Delivery;
    deliveryaddress?: string;
    deliverycost?: number;
    description?: string;
    discount?: number;
    discountValue?: string;
    email?: string;
    id?: number;
    modifiedby?: string;
    modifieddate?: Date;
    name?: string;
    order?: Order;
    responseCode?: string;
    responseDescription?: string;
    responseValues?: Array<string>;
    saleCustomCompound?: SaleCustomCompound;
    saleInventoryList?: Array<SaleInventory>;
    status?: number;
    statusDescription?: string;
    total?: number;
    totalValue?: string;
    userId?: string;
}
