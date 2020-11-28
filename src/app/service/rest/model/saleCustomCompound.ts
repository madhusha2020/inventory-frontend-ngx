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
import { Sale } from './sale';


export interface SaleCustomCompound { 
    createdby?: string;
    createddate?: Date;
    description?: string;
    id?: number;
    modifiedby?: string;
    modifieddate?: Date;
    name?: string;
    price?: number;
    responseCode?: string;
    responseValues?: Array<string>;
    sale?: Sale;
    status?: number;
    statusDescription?: string;
    testingperiod?: number;
    userId?: string;
}
