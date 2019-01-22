import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestiosapiService {

  constructor(private _Http : HttpClient) { }
  
  
  listQuestions(){
    return this._Http.get('http://localhost:8000/polls/')  
  }
}
