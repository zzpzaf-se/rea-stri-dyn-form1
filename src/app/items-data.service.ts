import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IItem } from './dataObjects/iitem';

@Injectable({
  providedIn: 'root',
})
export class ItemsDataService {
  constructor(private http: HttpClient) {}

  baseURL:string = 'http://localhost:8080/api/';

  getItem(id: number): Observable<IItem> {
    return this.http
      .get<IItem>(this.baseURL +`demo/items/id/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
