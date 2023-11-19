import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartment } from '../model/idepartment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
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

  FindId(departmentId:number):Observable<any>
  {
    return this.httpclient.get<any>(this.url+"/"+departmentId)
  }

  DeleteDept(departmentId:number):Observable<any>
  {
    return this.httpclient.delete<any>(this.url+"?id="+departmentId)
  }

  EditDept(deptData:any):Observable<any>
  {
    return this.httpclient.put<any>(this.url+"/EditData/"+deptData.departmentId,deptData,this.httpOptions)
  }
    
}
