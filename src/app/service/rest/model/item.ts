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
import { Inventory } from './inventory';
import { OrderItems } from './orderItems';


export interface Item { 
    avalableQty?: number;
    code?: string;
    createdby?: string;
    createddate?: Date;
    dangerlevel?: string;
    description?: string;
    id?: number;
    inventories?: Array<Inventory>;
    lastprice?: number;
    lastpriceValue?: string;
    modifiedby?: string;
    modifieddate?: Date;
    name?: string;
    orderItems?: Array<OrderItems>;
    orderedQty?: number;
    photo?: Array<string>;
    responseCode?: string;
    responseValues?: Array<string>;
    rop?: number;
    sprice?: number;
    spriceValue?: string;
    status?: number;
    statusDescription?: string;
    testperiod?: number;
    unit?: string;
    userId?: string;
}
