import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../model/iemployee';
import { CrudService } from '../service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  employeeId:number
  empData:IEmployee={
   employeeId: 0,
   employeeName: '',
   departmentId: 0,
   salary: 0
 }

  constructor(private cs:CrudService, private route:Router, private ar:ActivatedRoute) { }

  ngOnInit() {
    const tid=this.ar.snapshot.paramMap.get('employeeId')
    this.employeeId=Number(tid)
    this.cs.FindempId(this.employeeId).subscribe((data:IEmployee)=>this.empData=data)
  }

  editEmpData(userData:NgForm)
  {
    let empData:IEmployee={
      employeeId: this.empData.employeeId,
      employeeName:userData.controls['employeeName'].value,
      departmentId:userData.controls['departmentId'].value,
      salary:userData.controls['salary'].value
    }
    this.cs.EditEmp(empData).subscribe(()=>
      this.route.navigate(["/DisplayEmp"]))
  }

}
