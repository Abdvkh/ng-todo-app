import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable()
export class DrfResponseInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(map(event => {
      if (event instanceof HttpResponse && event.body.hasOwnProperty('results')) {
        return event.clone({
          body: event.body.results,
        })
      }
      return event;
    }));
  }
}
