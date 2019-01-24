import { Component, OnInit, Input } from '@angular/core';
import { QuestiosapiService } from '../../questiosapi.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(/*private _QuestionApi : QuestiosapiService*/) {
   }

  // tslint:disable-next-line:no-input-rename
  @Input('parentData') public ListOfQuestions;

  ngOnInit() {
    /* this._QuestionApi.listQuestions().subscribe(data=>{
      return this.list= data["results"];
    }); */
  }

}