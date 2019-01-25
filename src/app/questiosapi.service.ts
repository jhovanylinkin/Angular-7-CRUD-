import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { question } from '../app/models/question';
import { errorHandler } from '@angular/platform-browser/src/browser';

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

  listQuestions() {
    return this._Http.get('http://10.0.2.167:8000/polls/');
  }

  addQuestion(_question: question): Observable<question> {
    return this._Http.post<question>('http://10.0.2.167:8000/polls/results/', _question, this.httpOptions).pipe();
  }
}
