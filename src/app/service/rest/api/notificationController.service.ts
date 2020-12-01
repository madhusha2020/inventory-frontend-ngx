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

import { NotificationList } from '../model/notificationList';
import { TransactionRequest } from '../model/transactionRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class NotificationControllerService {

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
     * View a list of awaiting notifications
     * 
     * @param transactionRequest transactionRequest
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAwaitingNotificationsByUserUsingPOST(transactionRequest: TransactionRequest, observe?: 'body', reportProgress?: boolean): Observable<NotificationList>;
    public getAwaitingNotificationsByUserUsingPOST(transactionRequest: TransactionRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NotificationList>>;
    public getAwaitingNotificationsByUserUsingPOST(transactionRequest: TransactionRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NotificationList>>;
    public getAwaitingNotificationsByUserUsingPOST(transactionRequest: TransactionRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (transactionRequest === null || transactionRequest === undefined) {
            throw new Error('Required parameter transactionRequest was null or undefined when calling getAwaitingNotificationsByUserUsingPOST.');
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

        return this.httpClient.post<NotificationList>(`${this.basePath}/notification/user/awaiting`,
            transactionRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * View a list of new notifications
     * 
     * @param transactionRequest transactionRequest
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getNewNotificationsByUserUsingPOST(transactionRequest: TransactionRequest, observe?: 'body', reportProgress?: boolean): Observable<NotificationList>;
    public getNewNotificationsByUserUsingPOST(transactionRequest: TransactionRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NotificationList>>;
    public getNewNotificationsByUserUsingPOST(transactionRequest: TransactionRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NotificationList>>;
    public getNewNotificationsByUserUsingPOST(transactionRequest: TransactionRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (transactionRequest === null || transactionRequest === undefined) {
            throw new Error('Required parameter transactionRequest was null or undefined when calling getNewNotificationsByUserUsingPOST.');
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

        return this.httpClient.post<NotificationList>(`${this.basePath}/notification/user/pending`,
            transactionRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * View a list of notifications
     * 
     * @param transactionRequest transactionRequest
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getNotificationsByUserUsingPOST(transactionRequest: TransactionRequest, observe?: 'body', reportProgress?: boolean): Observable<NotificationList>;
    public getNotificationsByUserUsingPOST(transactionRequest: TransactionRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<NotificationList>>;
    public getNotificationsByUserUsingPOST(transactionRequest: TransactionRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<NotificationList>>;
    public getNotificationsByUserUsingPOST(transactionRequest: TransactionRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (transactionRequest === null || transactionRequest === undefined) {
            throw new Error('Required parameter transactionRequest was null or undefined when calling getNotificationsByUserUsingPOST.');
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

        return this.httpClient.post<NotificationList>(`${this.basePath}/notification`,
            transactionRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
