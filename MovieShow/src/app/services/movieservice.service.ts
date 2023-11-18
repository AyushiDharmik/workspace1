import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { IMovie } from '../model/imovie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  private url = ""
  constructor(private httpclient: HttpClient) { }

  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }

  getAllMovies(): Observable<any[]> {
    return this.httpclient.get<any[]>(this.url + '/ListMovies')
  }

  getMovie(id: number): Observable<IMovie> {
    return this.httpclient.get<IMovie>(this.url + '/ListMovies/' + id)
  }
 
  addMovie(moviedata: IMovie): Observable<IMovie> {
    return this.httpclient.post<IMovie>(this.url + '/AddMovie/', moviedata, this.httpOptions)
  }

  editMovie(moviedata: IMovie): Observable<IMovie> {
    return this.httpclient.put<IMovie>(this.url + '/EditMovie/' + moviedata.id, moviedata, this.httpOptions)
  }

  deleteMovie(id: number): Observable<IMovie> {
    return this.httpclient.delete<IMovie>(this.url + '/DeleteMovie/' + id)
  }
}
