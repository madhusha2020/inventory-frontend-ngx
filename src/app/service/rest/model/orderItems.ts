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
import { Item } from './item';
import { Order } from './order';
import { OrderItemId } from './orderItemId';


export interface OrderItems { 
    createdby?: string;
    createddate?: Date;
    item?: Item;
    modifiedby?: string;
    modifieddate?: Date;
    order?: Order;
    orderItemId?: OrderItemId;
    qty?: number;
    responseCode?: string;
    responseDescription?: string;
    responseValues?: Array<string>;
    status?: number;
    statusDescription?: string;
    userId?: string;
}
