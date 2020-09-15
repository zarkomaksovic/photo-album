import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor(
  ) { }

  handleError(error: HttpErrorResponse) {
    switch (error.status) {
      case error.status:
        return throwError(error.message);
      default:
        return throwError('Something bad happened, please try later');
    }
  }
}
