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
import { OrderItems } from './orderItems';


export interface Item {
    code?: string;
    createdby?: string;
    createddate?: Date;
    dangerlevel?: string;
    description?: string;
    id?: number;
    lastprice?: number;
    modifiedby?: string;
    modifieddate?: Date;
    name?: string;
    orderItems?: Array<OrderItems>;
    photo?: Array<string>;
    responseCode?: string;
    responseValues?: Array<string>;
    sprice?: number;
    status?: number;
    statusDescription?: string;
    testperiod?: number;
    userId?: string;
    spriceValue?: string;
    lastpriceValue?: string;
}
