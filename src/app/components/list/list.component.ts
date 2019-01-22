import { Component, OnInit } from '@angular/core';
import { QuestiosapiService } from '../../questiosapi.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _QuestionApi : QuestiosapiService) {
   }
  list:object;
  ngOnInit() {
    this._QuestionApi.listQuestions().subscribe(data=>{
      return this.list= data["results"];
    });
  }
}