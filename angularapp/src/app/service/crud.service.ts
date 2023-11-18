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

  getAllDept(): Observable<IDepartment[]> 
  {
    return this.httpclient.get<IDepartment[]>(this.url)
  }

  AddDept(deptData:IDepartment):Observable<IDepartment[]>
  {
    return this.httpclient.post<IDepartment[]>(this.url+"/savedept",deptData,this.httpOptions)
  }


}
