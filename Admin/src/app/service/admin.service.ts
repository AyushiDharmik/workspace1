import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  private url = "https://8080-cabbaacddbbbfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api"
  constructor(private httpclient: HttpClient) { }

  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }

  getCourses(): Observable<any> 
  {
    return this.httpclient.get<any>(this.url+"/course")
  }
  getCourse(id:number):Observable<any>
  {
    return this.httpclient.get<any>(this.url+"/"+id)
  }

  createCourse(course:any):Observable<any>
  {
    return this.httpclient.post<any>(this.url+"/create",course,this.httpOptions)
  }

  deleteCourse(id:number):Observable<any>
  {
    return this.httpclient.delete<any>(this.url+"/"+id)
  }

  updateCourse(id:number,course:any):Observable<any>
  {
    return this.httpclient.put<any>(this.url+"/"+course.id,course,this.httpOptions)
  }    
}
