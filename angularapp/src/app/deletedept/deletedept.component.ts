import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { IDepartment } from '../model/idepartment';

@Component({
  selector: 'app-deletedept',
  templateUrl: './deletedept.component.html',
  styleUrls: ['./deletedept.component.css']
})
export class DeletedeptComponent implements OnInit {
  
  constructor(private cs:CrudService, private route:Router, private activatedRoute:ActivatedRoute) { }
  deptdata:IDepartment={
    departmentId: 0, departmentName: ' ',
    employees: null
  }
  departmentId:number

  ngOnInit() {
    const tid=this.activatedRoute.snapshot.paramMap.get('departmentId')
    this.departmentId=Number(tid)
    this.Findbyid(this.departmentId)
  }
 
  Findbyid(id:number){
    this.cs.FindId(id).subscribe((data:IDepartment)=>this.deptdata=data)
  }

 
  deleteData(userData:NgForm):void
  {
    let id:number;
    let deptData:object
    this.cs.DeleteDept(id,deptData).subscribe(()=>
    this.route.navigate(["/DisplayDept"]));
  }

}
