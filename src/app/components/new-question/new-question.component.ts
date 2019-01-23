import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestiosapiService } from '../../questiosapi.service';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private _questionsapi: QuestiosapiService) { }

  form: FormGroup;
  submitted = false;
  success = false;

  public List: object;

  ngOnInit() {
    this.form = this._formBuilder.group({
      question_text: ['', Validators.required],
      pub_date: ['', Validators.required]
    });

    this.getList();
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this._questionsapi.addQuestion({
      question_text: this.form.controls.question_text.value,
      pub_date: this.form.controls.pub_date.value
    }).subscribe(data => {
      this.success = true;

      this.getList();

      M.toast({
        html: 'success',
        classes: 'rounded green'
      })
    });
  }

  getList(){
    this._questionsapi.listQuestions().subscribe(data => {
      return this.List = data["results"];
    });
  }

}
