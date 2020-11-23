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
import { ProductOutboundItem } from './productOutboundItem';


export interface ProductOutbound { 
    code?: string;
    createdby?: string;
    createddate?: Date;
    date?: Date;
    description?: string;
    id?: number;
    modifiedby?: string;
    modifieddate?: Date;
    productOutboundItems?: Array<ProductOutboundItem>;
    responseCode?: string;
    responseValues?: Array<string>;
    status?: number;
    statusDescription?: string;
    userId?: string;
}
