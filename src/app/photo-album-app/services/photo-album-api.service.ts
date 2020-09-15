import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling.service';
@Injectable({
  providedIn: 'root'
})
export class PhotoAlbumApiService {
  url = environment.apiUrl;
  constructor(
    private http: HttpClient,
    private errorService: ErrorHandlingService
  ) { }

  getAllAlbumsByUser() {
    // user id 1 currently fixed, to be changed dynamicaly based on user authentication id 
    return this.http.get<any>(`${this.url}/users/1/albums`).pipe(
      catchError(this.errorService.handleError)
    );
  }
}
