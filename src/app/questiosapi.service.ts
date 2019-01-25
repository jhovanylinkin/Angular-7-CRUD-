import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { question } from '../app/models/question';
import { catchError, retry } from 'rxjs/operators';
import * as M from 'materialize-css';
@Injectable({
  providedIn: 'root'
})
export class QuestiosapiService {
  constructor(private _Http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  private handleError(error: HttpErrorResponse) {
    error.error instanceof ErrorEvent ?
      M.toast({
        html: `An error uccurred ${error.error.message}`,
        classes: 'rounded red'
      })
      : M.toast({
        html: `Backend returned code:  &nbsp; <strong>${error.status}</strong>`,
        classes: 'rounded orange'
      });
      console.log(error.error);
    return throwError('Something bad happened; please try again later.');
  }

  listQuestions() {
    return this._Http.get('http://10.0.2.167:8000/polls/').pipe(
      catchError(this.handleError)
    );
  }

  addQuestion(_question: question): Observable<question> {
    return this._Http.post<question>('http://10.0.2.167:8000/polls/results/', _question, this.httpOptions).pipe(
      catchError(this.handleError));
  }
}
