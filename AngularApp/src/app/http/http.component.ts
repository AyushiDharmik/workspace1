import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  _http:HttpClient = null;
  constructor(http:HttpClient)
  {
    this._http = http;
  }

  ngOnInit() {
  }

  
 

}
