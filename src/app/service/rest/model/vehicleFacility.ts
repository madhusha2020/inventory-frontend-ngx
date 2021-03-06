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
import { VehicleVehicleFacility } from './vehicleVehicleFacility';


export interface VehicleFacility { 
    createdby?: string;
    createddate?: Date;
    id?: number;
    modifiedby?: string;
    modifieddate?: Date;
    name?: string;
    responseCode?: string;
    responseDescription?: string;
    responseValues?: Array<string>;
    status?: number;
    statusDescription?: string;
    userId?: string;
    vehicleFacilityList?: Array<VehicleVehicleFacility>;
}
