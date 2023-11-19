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

  constructor(private cs:CrudService, private route:Router, private activatedRoute:ActivatedRoute) { }
  deptdata:IDepartment
  departmentId:number

  ngOnInit() {
    const tid=this.activatedRoute.snapshot.paramMap.get('departmentId')
    this.departmentId=Number(tid)
    this.Findbyid(this.departmentId)
  }
 
  Findbyid(departmentId:number){
    this.cs.FindId(departmentId).subscribe((data:IDepartment)=>this.deptdata=data)
  }

 
  EditData(userData:NgForm):void
  {
    this.cs.EditDept(this.departmentId,this.deptdata).subscribe(()=>
    this.route.navigate(["/DisplayDept"]));
  }

}
