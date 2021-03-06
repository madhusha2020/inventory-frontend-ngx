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
let ItemControllerService = class ItemControllerService {
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
    getAllItemsUsingGET(offset, limit, observe = 'body', reportProgress = false) {
        if (offset === null || offset === undefined) {
            throw new Error('Required parameter offset was null or undefined when calling getAllItemsUsingGET.');
        }
        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling getAllItemsUsingGET.');
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
        return this.httpClient.get(`${this.basePath}/item`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    saveCustomerUsingPOST1(item, observe = 'body', reportProgress = false) {
        if (item === null || item === undefined) {
            throw new Error('Required parameter item was null or undefined when calling saveCustomerUsingPOST1.');
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
        return this.httpClient.post(`${this.basePath}/item`, item, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    searchItemsUsingPOST(searchFilter, offset, limit, observe = 'body', reportProgress = false) {
        if (searchFilter === null || searchFilter === undefined) {
            throw new Error('Required parameter searchFilter was null or undefined when calling searchItemsUsingPOST.');
        }
        if (offset === null || offset === undefined) {
            throw new Error('Required parameter offset was null or undefined when calling searchItemsUsingPOST.');
        }
        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling searchItemsUsingPOST.');
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
        return this.httpClient.post(`${this.basePath}/item/search`, searchFilter, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
};
ItemControllerService = __decorate([
    Injectable(),
    __param(1, Optional()), __param(1, Inject(BASE_PATH)), __param(2, Optional()),
    __metadata("design:paramtypes", [HttpClient, String, Configuration])
], ItemControllerService);
export { ItemControllerService };
//# sourceMappingURL=itemController.service.js.map