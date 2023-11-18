import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { IDepartment } from '../model/idepartment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-dept',
  templateUrl: './post-dept.component.html',
  styleUrls: ['./post-dept.component.css']
})
export class PostDeptComponent implements OnInit {

  deptData:IDepartment={departmentId:0,departmentName:''}

  constructor(private cs:CrudService, private route:Router) { }

  // saveData(userData:IDepartment):void{
  //   // this.deptData=d
  //   this.cs.AddDept(this.deptData).subscribe(()=>{alert("Recordas added successfully")
    
  //   this.route.navigate(["/DisplayDept"])})
  // }

  ngOnInit() {
  }

  saveData(u)

}
