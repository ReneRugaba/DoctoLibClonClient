import { serviceStorage } from './service/serviceStorage.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsinterceptorService implements HttpInterceptor {

  constructor(private route: Router, private storage: serviceStorage) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    return next.handle(req)
                        .pipe(
                              catchError(err => {
                                if (err.status === 500 || err.status === 404){
                                  return throwError(err);
                                }else if (err.status === 401) {
                                  this.storage.remove('currentUser');
                                  this.storage.remove('token');
                                  this.route.navigate(['/login']);
                                }
                              })
                              );
  }
}
