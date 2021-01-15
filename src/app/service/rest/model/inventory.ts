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
import { DisposalInventory } from './disposalInventory';
import { Item } from './item';
import { SaleInventory } from './saleInventory';
import { SupplierRefundInventory } from './supplierRefundInventory';
import { SupplierReturnInventory } from './supplierReturnInventory';


export interface Inventory { 
    code?: string;
    createdby?: string;
    createddate?: Date;
    description?: string;
    disposalInventoryList?: Array<DisposalInventory>;
    disposedQty?: number;
    doexpire?: string;
    id?: number;
    initqty?: number;
    item?: Item;
    modifiedby?: string;
    modifieddate?: Date;
    qty?: number;
    responseCode?: string;
    responseDescription?: string;
    responseValues?: Array<string>;
    saleInventoryList?: Array<SaleInventory>;
    status?: number;
    statusDescription?: string;
    supplierRefundInventories?: Array<SupplierRefundInventory>;
    supplierReturnInventories?: Array<SupplierReturnInventory>;
    userId?: string;
}
