import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  player:any[]=[]
  id:number
 
  constructor(private s:PlayersService, private route:Router, private ar:ActivatedRoute) { }
 
  ngOnInit() {
    const tid=this.ar.snapshot.paramMap.get('id');
    this.id=Number(tid);
    this.getPlayer(this.id);
  }
  getPlayer(id:number){
    this.s.getPlayer(id).subscribe((data:any)=>this.player=data);
  }
 
  DeleteData(){
    this.s.deletePlayer(this.id).subscribe(()=>{
    this.route.navigate(["/list"]) }
    )
  }

}
