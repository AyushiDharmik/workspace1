import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private s:PlayersService, private route:Router) { }

  createData(userData:NgForm):void{
   let player:Player=
    { id : 0,
      shirtno : userData.controls['shirtno'].value,
      name : userData.controls['name'].value,
      positionid :userData.controls['position'].value,
      appearances :userData.controls['appearances'].value,
      goals :userData.controls['goals'].value
    }
    this.s.createPlayer(player).subscribe(()=>
    this.route.navigate(["/list"]));
  }

  ngOnInit() {
  }

  BackToList(){
    this.route.navigate(['list']);
  }

}
