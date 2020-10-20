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
/* tslint:disable:no-unused-variable member-ordering */
import { __decorate, __metadata, __param } from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';
import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
let CustomerControllerService = class CustomerControllerService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://localhost:8080';
        this.defaultHeaders = new HttpHeaders();
        this.configuration = new Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    getAllCustomersUsingGET(offset, limit, observe = 'body', reportProgress = false) {
        if (offset === null || offset === undefined) {
            throw new Error('Required parameter offset was null or undefined when calling getAllCustomersUsingGET.');
        }
        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling getAllCustomersUsingGET.');
        }
        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', limit);
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        return this.httpClient.get(`${this.basePath}/customer`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveCustomerUsingPOST(customer, observe = 'body', reportProgress = false) {
        if (customer === null || customer === undefined) {
            throw new Error('Required parameter customer was null or undefined when calling saveCustomerUsingPOST.');
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/customer`, customer, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    searchCustomersUsingPOST(searchFilter, offset, limit, observe = 'body', reportProgress = false) {
        if (searchFilter === null || searchFilter === undefined) {
            throw new Error('Required parameter searchFilter was null or undefined when calling searchCustomersUsingPOST.');
        }
        if (offset === null || offset === undefined) {
            throw new Error('Required parameter offset was null or undefined when calling searchCustomersUsingPOST.');
        }
        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling searchCustomersUsingPOST.');
        }
        let queryParameters = new HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', limit);
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/customer/search`, searchFilter, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
};
CustomerControllerService = __decorate([
    Injectable(),
    __param(1, Optional()), __param(1, Inject(BASE_PATH)), __param(2, Optional()),
    __metadata("design:paramtypes", [HttpClient, String, Configuration])
], CustomerControllerService);
export { CustomerControllerService };
//# sourceMappingURL=customerController.service.js.map