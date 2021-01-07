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
import { ProductInboundItem } from './productInboundItem';


export interface ProductInbound { 
    code?: string;
    createdby?: string;
    createddate?: Date;
    date?: string;
    description?: string;
    id?: number;
    itemCount?: number;
    modifiedby?: string;
    modifieddate?: Date;
    productInboundItems?: Array<ProductInboundItem>;
    responseCode?: string;
    responseDescription?: string;
    responseValues?: Array<string>;
    status?: number;
    statusDescription?: string;
    userId?: string;
}
