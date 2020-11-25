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
import { OrderItems } from './orderItems';
import { OrderType } from './orderType';
import { Sale } from './sale';


export interface Order { 
    address?: string;
    code?: string;
    contact1?: string;
    createdby?: string;
    createddate?: Date;
    customer?: Customer;
    deliveryaddress?: string;
    deliverycost?: number;
    description?: string;
    doordered?: string;
    dorequired?: string;
    dosold?: string;
    email?: string;
    id?: number;
    modifiedby?: string;
    modifieddate?: Date;
    name?: string;
    orderItems?: Array<OrderItems>;
    orderType?: OrderType;
    responseCode?: string;
    responseValues?: Array<string>;
    sale?: Sale;
    status?: number;
    statusDescription?: string;
    type?: string;
    userId?: string;
}
