import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-post-dept',
  templateUrl: './post-dept.component.html',
  styleUrls: ['./post-dept.component.css']
})
export class PostDeptComponent implements OnInit {

  constructor(private cs:CrudService) { 

  }
  moviedata:IMovie={Id:0, Name:'',YearRelease:0, Rating:0}

  constructor(private ms:MovieServService, private route:Router) { }
  saveData(m:IMovie):void{
    this.moviedata=m
    this.ms.AddMovies(this.moviedata).subscribe(()=>{alert("Recordas added successfully")
    this.route.navigate(["/DisplayMovies"])})
  }

  ngOnInit() {
  }

}
