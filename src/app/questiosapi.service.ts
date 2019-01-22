import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { question } from '../app/models/question'
import { errorHandler } from '@angular/platform-browser/src/browser';

@Injectable({
  providedIn: 'root'
})
export class QuestiosapiService {
  constructor(private _Http : HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  listQuestions(){
    return this._Http.get('http://localhost:8000/polls/')  
  }

  addQuestion(question : question):Observable<question>{
    return this._Http.post<question>('http://localhost:8000/polls/results/',question,this.httpOptions).pipe();
  }
}
