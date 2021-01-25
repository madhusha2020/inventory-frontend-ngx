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

import { Complain } from '../model/complain';
import { ComplainList } from '../model/complainList';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ComplainControllerService {

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
     * View a list of available complains
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllComplainsUsingGET(observe?: 'body', reportProgress?: boolean): Observable<ComplainList>;
    public getAllComplainsUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ComplainList>>;
    public getAllComplainsUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ComplainList>>;
    public getAllComplainsUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<ComplainList>(`${this.basePath}/complain`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get complain by id
     * 
     * @param complainId complainId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getComplainByIdUsingGET(complainId: string, observe?: 'body', reportProgress?: boolean): Observable<Complain>;
    public getComplainByIdUsingGET(complainId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Complain>>;
    public getComplainByIdUsingGET(complainId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Complain>>;
    public getComplainByIdUsingGET(complainId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (complainId === null || complainId === undefined) {
            throw new Error('Required parameter complainId was null or undefined when calling getComplainByIdUsingGET.');
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

        return this.httpClient.get<Complain>(`${this.basePath}/complain/${encodeURIComponent(String(complainId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Save complain
     * 
     * @param complain complain
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveComplainUsingPOST(complain: Complain, observe?: 'body', reportProgress?: boolean): Observable<Complain>;
    public saveComplainUsingPOST(complain: Complain, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Complain>>;
    public saveComplainUsingPOST(complain: Complain, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Complain>>;
    public saveComplainUsingPOST(complain: Complain, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (complain === null || complain === undefined) {
            throw new Error('Required parameter complain was null or undefined when calling saveComplainUsingPOST.');
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

        return this.httpClient.post<Complain>(`${this.basePath}/complain`,
            complain,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update complain
     * 
     * @param complain complain
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateComplainUsingPUT(complain: Complain, observe?: 'body', reportProgress?: boolean): Observable<Complain>;
    public updateComplainUsingPUT(complain: Complain, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Complain>>;
    public updateComplainUsingPUT(complain: Complain, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Complain>>;
    public updateComplainUsingPUT(complain: Complain, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (complain === null || complain === undefined) {
            throw new Error('Required parameter complain was null or undefined when calling updateComplainUsingPUT.');
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

        return this.httpClient.put<Complain>(`${this.basePath}/complain`,
            complain,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
