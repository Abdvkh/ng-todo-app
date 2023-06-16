import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {NotificationsService} from "./notifications.service";

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  constructor(private readonly notificationService: NotificationsService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          } else {
            errorMsg = `Error Code: ${error.status},  Message: ${error.error.message}`;
          }
          this.notificationService.error(errorMsg);
          return throwError(errorMsg);
        })
      )
  }
}
