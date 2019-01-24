import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = '';
  user = '';
  email_user = '';
  constructor(private aPP: AppComponent) {
    this.title = aPP.title;
    this.user = aPP.user;
    this.email_user = aPP.email_user;
  }

  ngOnInit() {
  }

}
