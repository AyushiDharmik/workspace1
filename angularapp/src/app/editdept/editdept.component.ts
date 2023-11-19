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

  constructor(private cs:CrudService, private route:Router, private ar:ActivatedRoute) { }
  deptData:IDepartment={departmentId:0, departmentName:""}
  departmentId:number
 
 
  ngOnInit() {
    const tid=this.ar.snapshot.paramMap.get('departmentId');
    this.departmentId=Number(tid);
    this.FindId(this.departmentId);
  }
  Findbyid(departmentId:number){
    this.cs.Findbyid(departmentId).subscribe((data:IDepartment)=>this.deptData=data);
  }
  EditData(userData:NgForm){
    let deptData:IDepartment={
      departmentId:this.deptData.departmentId,
      departmentName:userData.controls["departmentName"].value
    }
    this.cs.EditDept(deptData).subscribe(()=>
      this.route.navigate(["/DisplayDept"]))
  }

}
