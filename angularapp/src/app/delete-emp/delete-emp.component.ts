import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../model/iemployee';
import { CrudService } from '../service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent implements OnInit {
  employeeId:number
  empData:IEmployee

  constructor(private cs:CrudService, private route:Router, private ar:ActivatedRoute) { }

  ngOnInit() {
    const tid=this.ar.snapshot.paramMap.get('employeeId')
    this.employeeId=Number(tid)
    this.cs.FindempId(this.employeeId).subscribe((data:IEmployee)=>this.empData=data)
  }

  deleteEmpData(userDeleteData:NgForm):void
  {
    this.cs.DeleteEmp(this.employeeId).subscribe(()=>
    this.route.navigate(["/DisplayEmp"]));
  }

}
