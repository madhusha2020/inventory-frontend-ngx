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
import { DeliveryEmployee } from './deliveryEmployee';


export interface Employee { 
    address?: string;
    callingname?: string;
    civilstatus?: string;
    code?: string;
    createdby?: string;
    createddate?: Date;
    deliveryEmployeeList?: Array<DeliveryEmployee>;
    description?: string;
    designation?: string;
    dobirth?: string;
    dorecruite?: string;
    email?: string;
    gender?: string;
    id?: number;
    land?: string;
    mobile?: string;
    modifiedby?: string;
    modifieddate?: Date;
    name?: string;
    nametitle?: string;
    nic?: string;
    photo?: Array<string>;
    responseCode?: string;
    responseValues?: Array<string>;
    status?: number;
    statusDescription?: string;
    userId?: string;
}
