import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players:any[]=[]
 
  constructor(private s:PlayersService) { 
    this.s.getPlayers().subscribe(data=>{this.players.push(...data); console.log(data)})
  }

  ngOnInit() {
  }


  



}
