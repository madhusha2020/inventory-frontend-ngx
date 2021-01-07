import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status >= 400) {
        console.log('intercepted an error');
        console.log(err);
        switch (err.error.responseDescription) {
          case 'Invalid Request':
            let errors = '<div><p>';
            err.error.responseValues.forEach(errorObject => {
              errors = errors + errorObject + '</br>';
            });
            errors = errors + '</p></div>';
            console.log(errors);
            Swal.fire('Oops...', errors, 'error');
            break;
          default:
            Swal.fire('Oops...', err.error.responseDescription, 'error');
        }
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
