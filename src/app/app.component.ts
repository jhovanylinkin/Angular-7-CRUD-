import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(){
    document.addEventListener("deviceready", function() { 
      alert(device.platform); 
      }, false); 
  }
  constructor(){
  }
  title = 'Questions';
}
