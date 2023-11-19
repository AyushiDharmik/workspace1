import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletedept',
  templateUrl: './deletedept.component.html',
  styleUrls: ['./deletedept.component.css']
})
export class DeletedeptComponent implements OnInit {
  

  constructor(private cs:CrudService,  private route:Router) { }

  ngOnInit() {
  }

 
  deleteData(userData:NgForm):void
  {
    let id:number;
    let deptData:object=
    { departmentId:0,
      departmentName:userData.controls['dname'].value,
      employees:null
    }
    this.cs.DeleteDept(id,deptData).subscribe(()=>
    this.route.navigate(["/DisplayDept"]));
  }

}
