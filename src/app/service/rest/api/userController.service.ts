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

import { CustomerUser } from '../model/customerUser';
import { EmployeeUser } from '../model/employeeUser';
import { UserList } from '../model/userList';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class UserControllerService {

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
     * Get all active users
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllActiveUsersUsingGET(observe?: 'body', reportProgress?: boolean): Observable<UserList>;
    public getAllActiveUsersUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserList>>;
    public getAllActiveUsersUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserList>>;
    public getAllActiveUsersUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<UserList>(`${this.basePath}/user/active`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all users
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllUsersUsingGET(observe?: 'body', reportProgress?: boolean): Observable<UserList>;
    public getAllUsersUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserList>>;
    public getAllUsersUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserList>>;
    public getAllUsersUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<UserList>(`${this.basePath}/user`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get customer by id
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCustomerByIdUsingGET(id: string, observe?: 'body', reportProgress?: boolean): Observable<CustomerUser>;
    public getCustomerByIdUsingGET(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CustomerUser>>;
    public getCustomerByIdUsingGET(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CustomerUser>>;
    public getCustomerByIdUsingGET(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getCustomerByIdUsingGET.');
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

        return this.httpClient.get<CustomerUser>(`${this.basePath}/user/customer/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get employee by id
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getEmployeeByIdUsingGET(id: string, observe?: 'body', reportProgress?: boolean): Observable<EmployeeUser>;
    public getEmployeeByIdUsingGET(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EmployeeUser>>;
    public getEmployeeByIdUsingGET(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EmployeeUser>>;
    public getEmployeeByIdUsingGET(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getEmployeeByIdUsingGET.');
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

        return this.httpClient.get<EmployeeUser>(`${this.basePath}/user/employee/${encodeURIComponent(String(id))}`,
            {
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
     * @param customerUser customerUser
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveCustomerUsingPOST(customerUser: CustomerUser, observe?: 'body', reportProgress?: boolean): Observable<CustomerUser>;
    public saveCustomerUsingPOST(customerUser: CustomerUser, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CustomerUser>>;
    public saveCustomerUsingPOST(customerUser: CustomerUser, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CustomerUser>>;
    public saveCustomerUsingPOST(customerUser: CustomerUser, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (customerUser === null || customerUser === undefined) {
            throw new Error('Required parameter customerUser was null or undefined when calling saveCustomerUsingPOST.');
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

        return this.httpClient.post<CustomerUser>(`${this.basePath}/user/customer`,
            customerUser,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Save employee
     * 
     * @param employeeUser employeeUser
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveEmployeeUsingPOST(employeeUser: EmployeeUser, observe?: 'body', reportProgress?: boolean): Observable<EmployeeUser>;
    public saveEmployeeUsingPOST(employeeUser: EmployeeUser, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EmployeeUser>>;
    public saveEmployeeUsingPOST(employeeUser: EmployeeUser, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EmployeeUser>>;
    public saveEmployeeUsingPOST(employeeUser: EmployeeUser, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (employeeUser === null || employeeUser === undefined) {
            throw new Error('Required parameter employeeUser was null or undefined when calling saveEmployeeUsingPOST.');
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

        return this.httpClient.post<EmployeeUser>(`${this.basePath}/user/employee`,
            employeeUser,
            {
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
     * @param customerUser customerUser
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateCustomerUsingPUT(customerUser: CustomerUser, observe?: 'body', reportProgress?: boolean): Observable<CustomerUser>;
    public updateCustomerUsingPUT(customerUser: CustomerUser, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CustomerUser>>;
    public updateCustomerUsingPUT(customerUser: CustomerUser, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CustomerUser>>;
    public updateCustomerUsingPUT(customerUser: CustomerUser, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (customerUser === null || customerUser === undefined) {
            throw new Error('Required parameter customerUser was null or undefined when calling updateCustomerUsingPUT.');
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

        return this.httpClient.put<CustomerUser>(`${this.basePath}/user/customer`,
            customerUser,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update employee
     * 
     * @param employeeUser employeeUser
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateEmployeeUsingPUT(employeeUser: EmployeeUser, observe?: 'body', reportProgress?: boolean): Observable<EmployeeUser>;
    public updateEmployeeUsingPUT(employeeUser: EmployeeUser, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<EmployeeUser>>;
    public updateEmployeeUsingPUT(employeeUser: EmployeeUser, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<EmployeeUser>>;
    public updateEmployeeUsingPUT(employeeUser: EmployeeUser, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (employeeUser === null || employeeUser === undefined) {
            throw new Error('Required parameter employeeUser was null or undefined when calling updateEmployeeUsingPUT.');
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

        return this.httpClient.put<EmployeeUser>(`${this.basePath}/user/employee`,
            employeeUser,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
