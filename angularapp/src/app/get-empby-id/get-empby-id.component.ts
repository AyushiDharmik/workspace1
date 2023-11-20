import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../model/iemployee';
import { CrudService } from '../service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-empby-id',
  templateUrl: './get-empby-id.component.html',
  styleUrls: ['./get-empby-id.component.css']
})
export class GetEmpbyIdComponent implements OnInit {
  employeeId:number
  empData:IEmployee={employeeId: 0,
   employeeName:"",
   departmentId: 0,
   salary: 0
 }

  constructor(private cs:CrudService, private route:Router, private ar:ActivatedRoute) { }

  ngOnInit() {
    const tid=this.ar.snapshot.paramMap.get('employeeId')
    this.employeeId=Number(tid)
    this.cs.FindempId(this.employeeId).subscribe((data:IEmployee)=>this.empData=data)
  }
}
