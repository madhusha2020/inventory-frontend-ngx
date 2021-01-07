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
import { Disposal } from './disposal';


export interface DisposalList { 
    disposalList?: Array<Disposal>;
    responseCode?: string;
    responseDescription?: string;
    responseValues?: Array<string>;
}
