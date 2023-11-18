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

  deptData:IDepartment={departmentId:0,departmentName:' ',employees:null}

  constructor(private cs:CrudService, private route:Router) { }

  saveData(userData:NgForm):void{
    // this.deptData=d
    this.cs.AddDept(this.deptData).subscribe((data)=>
    {console.log(data)},error=>{
      console.log(error);
    })
    
    this.route.navigate(["/getDept"])})
  }

  ngOnInit() {
  }

 

}
