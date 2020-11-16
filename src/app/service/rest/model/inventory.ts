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


export interface Inventory { 
    code?: string;
    createdby?: string;
    createddate?: Date;
    description?: string;
    doexpire?: string;
    id?: number;
    initqty?: number;
    item?: Item;
    modifiedby?: string;
    modifieddate?: Date;
    qty?: number;
    responseCode?: string;
    responseValues?: Array<string>;
    status?: number;
    statusDescription?: string;
    userId?: string;
}
