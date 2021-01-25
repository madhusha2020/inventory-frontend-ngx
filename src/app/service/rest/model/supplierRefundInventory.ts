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
import { Inventory } from './inventory';
import { SupplierRefund } from './supplierRefund';
import { SupplierRefundInventoryId } from './supplierRefundInventoryId';


export interface SupplierRefundInventory { 
    createdby?: string;
    createddate?: Date;
    inventory?: Inventory;
    itemId?: number;
    modifiedby?: string;
    modifieddate?: Date;
    qty?: number;
    responseCode?: string;
    responseDescription?: string;
    responseValues?: Array<string>;
    status?: number;
    statusDescription?: string;
    supplierRefund?: SupplierRefund;
    supplierRefundInventoryId?: SupplierRefundInventoryId;
    unitprice?: number;
    userId?: string;
}
