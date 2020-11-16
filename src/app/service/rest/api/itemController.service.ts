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

import { Item } from '../model/item';
import { ItemList } from '../model/itemList';
import { SearchFilter } from '../model/searchFilter';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ItemControllerService {

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
     * View a list of available active items
     * 
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The numbers of items to return.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllActiveItemsUsingGET(offset: number, limit: number, observe?: 'body', reportProgress?: boolean): Observable<ItemList>;
    public getAllActiveItemsUsingGET(offset: number, limit: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ItemList>>;
    public getAllActiveItemsUsingGET(offset: number, limit: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ItemList>>;
    public getAllActiveItemsUsingGET(offset: number, limit: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (offset === null || offset === undefined) {
            throw new Error('Required parameter offset was null or undefined when calling getAllActiveItemsUsingGET.');
        }

        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling getAllActiveItemsUsingGET.');
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

        return this.httpClient.get<ItemList>(`${this.basePath}/item/active`,
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
     * View a list of available items
     * 
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The numbers of items to return.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllItemsUsingGET(offset: number, limit: number, observe?: 'body', reportProgress?: boolean): Observable<ItemList>;
    public getAllItemsUsingGET(offset: number, limit: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ItemList>>;
    public getAllItemsUsingGET(offset: number, limit: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ItemList>>;
    public getAllItemsUsingGET(offset: number, limit: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (offset === null || offset === undefined) {
            throw new Error('Required parameter offset was null or undefined when calling getAllItemsUsingGET.');
        }

        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling getAllItemsUsingGET.');
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

        return this.httpClient.get<ItemList>(`${this.basePath}/item`,
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
     * Save item
     * 
     * @param item item
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveItemUsingPOST(item: Item, observe?: 'body', reportProgress?: boolean): Observable<Item>;
    public saveItemUsingPOST(item: Item, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Item>>;
    public saveItemUsingPOST(item: Item, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Item>>;
    public saveItemUsingPOST(item: Item, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (item === null || item === undefined) {
            throw new Error('Required parameter item was null or undefined when calling saveItemUsingPOST.');
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

        return this.httpClient.post<Item>(`${this.basePath}/item`,
            item,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Search items
     * 
     * @param searchFilter searchFilter
     * @param offset The number of items to skip before starting to collect the result set.
     * @param limit The numbers of items to return.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public searchItemsUsingPOST(searchFilter: SearchFilter, offset: number, limit: number, observe?: 'body', reportProgress?: boolean): Observable<ItemList>;
    public searchItemsUsingPOST(searchFilter: SearchFilter, offset: number, limit: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ItemList>>;
    public searchItemsUsingPOST(searchFilter: SearchFilter, offset: number, limit: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ItemList>>;
    public searchItemsUsingPOST(searchFilter: SearchFilter, offset: number, limit: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (searchFilter === null || searchFilter === undefined) {
            throw new Error('Required parameter searchFilter was null or undefined when calling searchItemsUsingPOST.');
        }

        if (offset === null || offset === undefined) {
            throw new Error('Required parameter offset was null or undefined when calling searchItemsUsingPOST.');
        }

        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling searchItemsUsingPOST.');
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

        return this.httpClient.post<ItemList>(`${this.basePath}/item/search`,
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
