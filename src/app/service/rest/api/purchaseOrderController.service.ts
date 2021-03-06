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

import { PurchaseOrder } from '../model/purchaseOrder';
import { PurchaseOrderItemsList } from '../model/purchaseOrderItemsList';
import { PurchaseOrderList } from '../model/purchaseOrderList';
import { TransactionRequest } from '../model/transactionRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PurchaseOrderControllerService {

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
     * Approve purchase order
     * 
     * @param transactionRequest transactionRequest
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public approvePurchaseOrderUsingPUT(transactionRequest: TransactionRequest, observe?: 'body', reportProgress?: boolean): Observable<PurchaseOrder>;
    public approvePurchaseOrderUsingPUT(transactionRequest: TransactionRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PurchaseOrder>>;
    public approvePurchaseOrderUsingPUT(transactionRequest: TransactionRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PurchaseOrder>>;
    public approvePurchaseOrderUsingPUT(transactionRequest: TransactionRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (transactionRequest === null || transactionRequest === undefined) {
            throw new Error('Required parameter transactionRequest was null or undefined when calling approvePurchaseOrderUsingPUT.');
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

        return this.httpClient.put<PurchaseOrder>(`${this.basePath}/purchase-order/approve`,
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
     * View a list of available purchase orders
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllPurchaseOrdersUsingGET(observe?: 'body', reportProgress?: boolean): Observable<PurchaseOrderList>;
    public getAllPurchaseOrdersUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PurchaseOrderList>>;
    public getAllPurchaseOrdersUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PurchaseOrderList>>;
    public getAllPurchaseOrdersUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<PurchaseOrderList>(`${this.basePath}/purchase-order`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all orders by supplierId
     * 
     * @param transactionRequest transactionRequest
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOrdersBySupplierUsingPOST(transactionRequest: TransactionRequest, observe?: 'body', reportProgress?: boolean): Observable<PurchaseOrderList>;
    public getOrdersBySupplierUsingPOST(transactionRequest: TransactionRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PurchaseOrderList>>;
    public getOrdersBySupplierUsingPOST(transactionRequest: TransactionRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PurchaseOrderList>>;
    public getOrdersBySupplierUsingPOST(transactionRequest: TransactionRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (transactionRequest === null || transactionRequest === undefined) {
            throw new Error('Required parameter transactionRequest was null or undefined when calling getOrdersBySupplierUsingPOST.');
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

        return this.httpClient.post<PurchaseOrderList>(`${this.basePath}/purchase-order/supplier`,
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
     * Get purchase orders by orderId
     * 
     * @param purchaseOrderId purchaseOrderId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPurchaseOrderByIdUsingGET(purchaseOrderId: string, observe?: 'body', reportProgress?: boolean): Observable<PurchaseOrder>;
    public getPurchaseOrderByIdUsingGET(purchaseOrderId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PurchaseOrder>>;
    public getPurchaseOrderByIdUsingGET(purchaseOrderId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PurchaseOrder>>;
    public getPurchaseOrderByIdUsingGET(purchaseOrderId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (purchaseOrderId === null || purchaseOrderId === undefined) {
            throw new Error('Required parameter purchaseOrderId was null or undefined when calling getPurchaseOrderByIdUsingGET.');
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

        return this.httpClient.get<PurchaseOrder>(`${this.basePath}/purchase-order/${encodeURIComponent(String(purchaseOrderId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Place purchase order
     * 
     * @param purchaseOrderItemsList purchaseOrderItemsList
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public placePurchaseOrderUsingPOST(purchaseOrderItemsList: PurchaseOrderItemsList, observe?: 'body', reportProgress?: boolean): Observable<PurchaseOrderItemsList>;
    public placePurchaseOrderUsingPOST(purchaseOrderItemsList: PurchaseOrderItemsList, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PurchaseOrderItemsList>>;
    public placePurchaseOrderUsingPOST(purchaseOrderItemsList: PurchaseOrderItemsList, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PurchaseOrderItemsList>>;
    public placePurchaseOrderUsingPOST(purchaseOrderItemsList: PurchaseOrderItemsList, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (purchaseOrderItemsList === null || purchaseOrderItemsList === undefined) {
            throw new Error('Required parameter purchaseOrderItemsList was null or undefined when calling placePurchaseOrderUsingPOST.');
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

        return this.httpClient.post<PurchaseOrderItemsList>(`${this.basePath}/purchase-order`,
            purchaseOrderItemsList,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Reject purchase order
     * 
     * @param transactionRequest transactionRequest
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public rejectPurchaseOrderUsingPUT(transactionRequest: TransactionRequest, observe?: 'body', reportProgress?: boolean): Observable<PurchaseOrder>;
    public rejectPurchaseOrderUsingPUT(transactionRequest: TransactionRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PurchaseOrder>>;
    public rejectPurchaseOrderUsingPUT(transactionRequest: TransactionRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PurchaseOrder>>;
    public rejectPurchaseOrderUsingPUT(transactionRequest: TransactionRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (transactionRequest === null || transactionRequest === undefined) {
            throw new Error('Required parameter transactionRequest was null or undefined when calling rejectPurchaseOrderUsingPUT.');
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

        return this.httpClient.put<PurchaseOrder>(`${this.basePath}/purchase-order/reject`,
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
