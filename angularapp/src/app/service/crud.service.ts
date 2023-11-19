import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartment } from '../model/idepartment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // saveData(value: any): any {
  //   throw new Error('Method not implemented.');
  // }

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

  FindId(departmentId:number):Observable<IDepartment>
  {
    return this.httpclient.get<IDepartment>(this.url+"/"+departmentId)
  }

  DeleteDept(departmentId:number):Observable<IDepartment>
  {
    return this.httpclient.delete<IDepartment>(this.url+"?id="+departmentId)
  }

  EditDept(departmentId:number,deptData:any):Observable<any>
  {
    return this.httpclient.put<any>(this.url+"/EditData/"+departmentId,deptData)
  }

  

    
}
