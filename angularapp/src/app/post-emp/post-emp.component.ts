import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-emp',
  templateUrl: './post-emp.component.html',
  styleUrls: ['./post-emp.component.css']
})
export class PostEmpComponent implements OnInit {

  constructor(private cs:CrudService, private route:Router) { }

  saveData(userData:NgForm):void
  {
    let empData:object=
    {
      employeeId:0,
    employeeName:userData.controls['ename'].value,
    departmentId:userData.controls['dId'].value,
    salary:0
    }
    this.cs.AddEmp(empData).subscribe(()=>this.route.navigate(["DisplayEmp"]))
  }

  ngOnInit() {
  }

}
