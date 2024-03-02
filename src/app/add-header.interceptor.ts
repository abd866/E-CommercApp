import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

  constructor() {}
userToken:any=localStorage.getItem('userToken')
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.userToken){
      let newRQ=  request.clone({
        headers:request.headers.set('token',this.userToken)

      })
      return next.handle(newRQ);
    }

    return next.handle(request);
  }
}
