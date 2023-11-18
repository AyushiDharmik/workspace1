import { Injectable } from '@angular/core';
import { HttpClientModule,HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDepartment } from '../model/idepartment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


  private url = "https://8080-cabbaacddbbbfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api/Department"
  constructor(private httpclient: HttpClient) { }

  // httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }

  getAllDept(): Observable<IDepartment[]> {
    return this.httpclient.get<IDepartment[]>(this.url )
  }


}
