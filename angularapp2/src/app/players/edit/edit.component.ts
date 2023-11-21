import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:number
  player:any[]=[]
  
  constructor(private s:PlayersService, private route:Router, private activatedRoute:ActivatedRoute) { }
  

  ngOnInit() {
    const tid=this.activatedRoute.snapshot.paramMap.get('id')
    this.id=Number(tid)
    this.getplayer(this.id)
  }
 
  getplayer(id:number){
    this.s.getPlayer(id).subscribe((data:any)=>this.player=data)
  }

 
  EditData(userData:NgForm):void
  {
    let player:Player={
      id : this.id,
      shirtno : userData.controls['shirtno'].value,
      name : userData.controls['name'].value,
      positionid :userData.controls['position'].value,
      appearances :userData.controls['appearances'].value,
      goals :userData.controls['goals'].value
    }
    this.s.updatePlayer(this.id,player).subscribe(()=>
    this.route.navigate(["/list"]));
  }

}
