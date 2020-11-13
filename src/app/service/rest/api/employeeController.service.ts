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

import { EmployeeList } from '../model/employeeList';
import { SearchFilter } from '../model/searchFilter';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class EmployeeControllerService {

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
     * View a list of available active employees
     * 
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The numbers of items to return.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllActiveEmployeesUsingGET(offset: number, limit: number, observe?: 'body', reportProgress?: boolean): Observable<EmployeeList>;
    public getAllActiveEmployeesUsingGET(offset: number, limit: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EmployeeList>>;
    public getAllActiveEmployeesUsingGET(offset: number, limit: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EmployeeList>>;
    public getAllActiveEmployeesUsingGET(offset: number, limit: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (offset === null || offset === undefined) {
            throw new Error('Required parameter offset was null or undefined when calling getAllActiveEmployeesUsingGET.');
        }

        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling getAllActiveEmployeesUsingGET.');
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

        return this.httpClient.get<EmployeeList>(`${this.basePath}/employee/active`,
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
     * View a list of available employees
     * 
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The numbers of items to return.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllEmployeesUsingGET(offset: number, limit: number, observe?: 'body', reportProgress?: boolean): Observable<EmployeeList>;
    public getAllEmployeesUsingGET(offset: number, limit: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EmployeeList>>;
    public getAllEmployeesUsingGET(offset: number, limit: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EmployeeList>>;
    public getAllEmployeesUsingGET(offset: number, limit: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (offset === null || offset === undefined) {
            throw new Error('Required parameter offset was null or undefined when calling getAllEmployeesUsingGET.');
        }

        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling getAllEmployeesUsingGET.');
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

        return this.httpClient.get<EmployeeList>(`${this.basePath}/employee`,
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
     * Search employees
     * 
     * @param searchFilter searchFilter
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The numbers of items to return.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public searchEmployeesUsingPOST(searchFilter: SearchFilter, offset: number, limit: number, observe?: 'body', reportProgress?: boolean): Observable<EmployeeList>;
    public searchEmployeesUsingPOST(searchFilter: SearchFilter, offset: number, limit: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EmployeeList>>;
    public searchEmployeesUsingPOST(searchFilter: SearchFilter, offset: number, limit: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EmployeeList>>;
    public searchEmployeesUsingPOST(searchFilter: SearchFilter, offset: number, limit: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (searchFilter === null || searchFilter === undefined) {
            throw new Error('Required parameter searchFilter was null or undefined when calling searchEmployeesUsingPOST.');
        }

        if (offset === null || offset === undefined) {
            throw new Error('Required parameter offset was null or undefined when calling searchEmployeesUsingPOST.');
        }

        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling searchEmployeesUsingPOST.');
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

        return this.httpClient.post<EmployeeList>(`${this.basePath}/employee/search`,
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

}
