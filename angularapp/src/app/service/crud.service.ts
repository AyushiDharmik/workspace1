import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartment } from '../model/idepartment';
import { IEmployee } from '../model/iemployee';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  private url1 = "https://8080-cabbaacddbbbfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api/Department"
  private url2 = "https://8080-cabbaacddbbbfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api/Employee"
  
  constructor(private httpclient: HttpClient) { }

  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }

  getAllDept(): Observable<any> 
  {
    return this.httpclient.get<any>(this.url1)
  }

  AddDept(deptData:any):Observable<any>
  {
    return this.httpclient.post<any>(this.url1+"/savedept",deptData,this.httpOptions)
  }

  FindId(departmentId:number):Observable<any>
  {
    return this.httpclient.get<any>(this.url1+"/"+departmentId)
  }

  DeleteDept(departmentId:number):Observable<any>
  {
    return this.httpclient.delete<any>(this.url1+"?id="+departmentId)
  }

  EditDept(deptData:any):Observable<any>
  {
    return this.httpclient.put<any>(this.url1+"/EditData/"+deptData.departmentId,deptData,this.httpOptions)
  }
    
  getAllEmp(): Observable<any> 
  {
    return this.httpclient.get<any>(this.url2)
  }

  AddEmp(empData:any):Observable<any>
  {
    return this.httpclient.post<any>(this.url2+"/savedata",empData,this.httpOptions)
  }

  FindempId(employeeId:number):Observable<any>
  {
    return this.httpclient.get<any>(this.url2+"/Findbyid/"+employeeId)
  }

  DeleteEmp(employeeId:number):Observable<any>
  {
    return this.httpclient.delete<any>(this.url2+"?id="+employeeId)
  }

  EditEmp(empData:IEmployee):Observable<IEmployee>
  {
    return this.httpclient.put<any>(this.url2+"/"+empData.employeeId,empData,this.httpOptions)
  }


}
