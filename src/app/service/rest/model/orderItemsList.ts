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
import { Order } from './order';
import { OrderItems } from './orderItems';


export interface OrderItemsList { 
    description?: string;
    order?: Order;
    orderItems?: Array<OrderItems>;
    responseCode?: string;
    responseValues?: Array<string>;
    userId?: string;
}