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
import { UserRole } from './userRole';


export interface Role { 
    createdby?: string;
    createddate?: Date;
    description?: string;
    modifiedby?: string;
    modifieddate?: Date;
    name?: string;
    privileges?: Array<Privilege>;
    responseCode?: string;
    responseValues?: Array<string>;
    status?: number;
    statusDescription?: string;
    userId?: string;
    userRoles?: Array<UserRole>;
}
