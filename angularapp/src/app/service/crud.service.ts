import { Injectable } from '@angular/core';
import { HttpClientModule,HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDepartment } from '../model/idepartment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  saveData(value: any): any {
    throw new Error('Method not implemented.');
  }


  private url = "https://8080-cabbaacddbbbfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api/Department"
  constructor(private httpclient: HttpClient) { }

  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }

  getAllDept(): Observable<any> 
  {
    return this.httpclient.get<any>(this.url)
  }

  AddDept(deptData:any):Observable<any>
  {
    return this.httpclient.post<any>(this.url+"/savedept",deptData,this.httpOptions)
  }


}
