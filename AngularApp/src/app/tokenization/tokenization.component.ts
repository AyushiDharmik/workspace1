import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tokenization',
  templateUrl: './tokenization.component.html',
  styleUrls: ['./tokenization.component.css']
})
export class TokenizationComponent implements OnInit {

  constructor(private http:HttpClient) 
  { 
    let httpheaders:HttpHeaders=new HttpHeaders({
      Accept: 'application/json'
    });
    // this.http.post<Idata>("")
  }

  ngOnInit() {
  }

  

}

interface Idata{
  name:string
  password:string
}
