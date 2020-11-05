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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Customer } from '../model/customer';
import { CustomerList } from '../model/customerList';
import { SearchFilter } from '../model/searchFilter';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CustomerControllerService {

    protected basePath = 'https://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * View a list of available customers
     * 
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The numbers of items to return.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllCustomersUsingGET(offset: number, limit: number, observe?: 'body', reportProgress?: boolean): Observable<CustomerList>;
    public getAllCustomersUsingGET(offset: number, limit: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CustomerList>>;
    public getAllCustomersUsingGET(offset: number, limit: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CustomerList>>;
    public getAllCustomersUsingGET(offset: number, limit: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (offset === null || offset === undefined) {
            throw new Error('Required parameter offset was null or undefined when calling getAllCustomersUsingGET.');
        }

        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling getAllCustomersUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<CustomerList>(`${this.basePath}/customer`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Save customer
     * 
     * @param customer customer
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveCustomerUsingPOST(customer: Customer, observe?: 'body', reportProgress?: boolean): Observable<Customer>;
    public saveCustomerUsingPOST(customer: Customer, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Customer>>;
    public saveCustomerUsingPOST(customer: Customer, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Customer>>;
    public saveCustomerUsingPOST(customer: Customer, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (customer === null || customer === undefined) {
            throw new Error('Required parameter customer was null or undefined when calling saveCustomerUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Customer>(`${this.basePath}/customer`,
            customer,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Search customers
     * 
     * @param searchFilter searchFilter
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The numbers of items to return.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public searchCustomersUsingPOST(searchFilter: SearchFilter, offset: number, limit: number, observe?: 'body', reportProgress?: boolean): Observable<CustomerList>;
    public searchCustomersUsingPOST(searchFilter: SearchFilter, offset: number, limit: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CustomerList>>;
    public searchCustomersUsingPOST(searchFilter: SearchFilter, offset: number, limit: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CustomerList>>;
    public searchCustomersUsingPOST(searchFilter: SearchFilter, offset: number, limit: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (searchFilter === null || searchFilter === undefined) {
            throw new Error('Required parameter searchFilter was null or undefined when calling searchCustomersUsingPOST.');
        }

        if (offset === null || offset === undefined) {
            throw new Error('Required parameter offset was null or undefined when calling searchCustomersUsingPOST.');
        }

        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling searchCustomersUsingPOST.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (offset !== undefined && offset !== null) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<CustomerList>(`${this.basePath}/customer/search`,
            searchFilter,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update customer
     * 
     * @param customer customer
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateCustomerUsingPUT(customer: Customer, observe?: 'body', reportProgress?: boolean): Observable<Customer>;
    public updateCustomerUsingPUT(customer: Customer, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Customer>>;
    public updateCustomerUsingPUT(customer: Customer, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Customer>>;
    public updateCustomerUsingPUT(customer: Customer, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (customer === null || customer === undefined) {
            throw new Error('Required parameter customer was null or undefined when calling updateCustomerUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<Customer>(`${this.basePath}/customer`,
            customer,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
