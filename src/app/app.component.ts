import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
  }
  title = 'Questions';
  user = 'Jhovany Morales Bruno';
  email_user = 'jhovanymb.info@gmail.com';

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.sidenav');
      const instances = M.Sidenav.init(elems, {});

      const collapsibles = document.querySelectorAll('.collapsible');
      const collapsibleInstance = M.Collapsible.init(collapsibles, {
        accordion: true
      });
    });

    document.addEventListener('deviceready', function() {
      alert(device.platform);
      }, false);
  }
}
