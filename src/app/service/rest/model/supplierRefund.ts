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
import { SupplierRefundInventory } from './supplierRefundInventory';


export interface SupplierRefund { 
    amount?: number;
    chequebank?: string;
    chequebranch?: string;
    chequedate?: string;
    chequeno?: string;
    code?: string;
    createdby?: string;
    createddate?: Date;
    date?: string;
    description?: string;
    id?: number;
    modifiedby?: string;
    modifieddate?: Date;
    paymenttype?: string;
    reason?: string;
    responseCode?: string;
    responseDescription?: string;
    responseValues?: Array<string>;
    status?: number;
    statusDescription?: string;
    supplierRefundInventories?: Array<SupplierRefundInventory>;
    userId?: string;
}