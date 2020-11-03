import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import {TokenService} from '../service/auth/token.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.tokenService.getToken();
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
}
