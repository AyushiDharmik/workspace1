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
    this._http.get("https://8080-cabbaacddbbbfabcaaaceeafebeccaddbefddaf.premiumproject.examly.io/api/Department/ListDept").subscribe((data)=>{
      console.log(data);
    },
    (failure)=>{console.log(failure);
    });
    // this._http.post();
    // this._http.put();

  }

  ngOnInit() {
  }

}
