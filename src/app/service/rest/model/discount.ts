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


export interface Discount { 
    category?: string;
    createdby?: string;
    createddate?: Date;
    description?: string;
    discount?: number;
    id?: number;
    modifiedby?: string;
    modifieddate?: Date;
    responseCode?: string;
    responseValues?: Array<string>;
    status?: number;
    statusDescription?: string;
    type?: string;
    userId?: string;
}