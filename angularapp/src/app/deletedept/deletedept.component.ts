import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-deletedept',
  templateUrl: './deletedept.component.html',
  styleUrls: ['./deletedept.component.css']
})
export class DeletedeptComponent implements OnInit {

  constructor(private cs:CrudService) { }

  ngOnInit() {
  }

  deleteData(userData:NgForm):void
  {

    this.cs.DeleteDept(deptData).subscribe(()=>

    this.route.navigate(["/DisplayMovies"]) }
  }

}
