import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { IDepartment } from '../model/idepartment';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-dept',
  templateUrl: './post-dept.component.html',
  styleUrls: ['./post-dept.component.css']
})
export class PostDeptComponent implements OnInit {

  

  constructor(private cs:CrudService, private route:Router) { }

  saveData(userData:NgForm):void{
   let deptData:object=
    { departmentId:0,
      departmentName:userData.controls['dname'].value,
      employees:null
    }
    this.cs.AddDept(deptData).subscribe()
  }

  ngOnInit() {
  }

 

}
