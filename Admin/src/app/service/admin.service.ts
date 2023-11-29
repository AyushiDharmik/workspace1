import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  
  public url = ""
  constructor(private httpclient: HttpClient) { }

  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }

  getPlayers(): Observable<any> 
  {
    return this.httpclient.get<any>(this.url)
  }
  getPlayer(id:number):Observable<Player>
  {
    return this.httpclient.get<Player>(this.url+"/"+id)
  }

  createPlayer(player:Player):Observable<Player>
  {
    return this.httpclient.post<Player>(this.url , this.httpOptions)
  }

  deletePlayer(id:number):Observable<Player>
  {
    return this.httpclient.delete<Player>(this.url+"/"+id)
  }

  updatePlayer(id:number,player:Player):Observable<Player>
  {
    return this.httpclient.put<Player>(this.url+"/"+player.id,player,this.httpOptions)
  }    
}
