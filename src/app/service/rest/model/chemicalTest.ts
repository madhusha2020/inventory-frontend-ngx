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
import { CustomerPayment } from './customerPayment';


export interface ChemicalTest { 
    address?: string;
    code?: string;
    createdby?: string;
    createddate?: Date;
    customerPayment?: CustomerPayment;
    description?: string;
    dodone?: string;
    dorequested?: string;
    dotested?: string;
    id?: number;
    modifiedby?: string;
    modifieddate?: Date;
    price?: number;
    responseCode?: string;
    responseValues?: Array<string>;
    result?: string;
    status?: number;
    statusDescription?: string;
    userId?: string;
}
