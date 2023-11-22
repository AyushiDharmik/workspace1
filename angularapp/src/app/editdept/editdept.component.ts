import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IDepartment } from '../model/idepartment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editdept',
  templateUrl: './editdept.component.html',
  styleUrls: ['./editdept.component.css']
})
export class EditdeptComponent implements OnInit {
  departmentId:number
  deptData:IDepartment={departmentId:0,departmentName:"",employees:null}
  
  constructor(private cs:CrudService, private route:Router, private activatedRoute:ActivatedRoute) { }
  
  ngOnInit() {
    const tid=this.activatedRoute.snapshot.paramMap.get('departmentId')
    this.departmentId=Number(tid)
    this.cs.FindId(this.departmentId).subscribe((data:IDepartment)=>this.deptData=data)
  }
 
  EditData(userData:NgForm):void
  {
    let deptData:IDepartment={
      departmentId: this.deptData.departmentId,
      departmentName: userData.controls["departmentName"].value,
      employees: null
    }
    this.cs.EditDept(deptData).subscribe(()=>
    this.route.navigate(["/DisplayDept"]));
  }

}
 