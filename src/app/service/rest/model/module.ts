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
import { Privilege } from './privilege';


export interface Module { 
    add?: string;
    createdby?: string;
    createddate?: Date;
    _delete?: string;
    getAll?: string;
    getBasic?: string;
    id?: number;
    modifiedby?: string;
    modifieddate?: Date;
    permissionCode?: string;
    permissionDescription?: string;
    privileges?: Array<Privilege>;
    responseCode?: string;
    responseDescription?: string;
    responseValues?: Array<string>;
    status?: number;
    statusDescription?: string;
    update?: string;
    userId?: string;
}
