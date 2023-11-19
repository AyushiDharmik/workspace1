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

 
  deleteData(userDelete:NgForm):void
  {
    this.cs.DeleteDept(this.departmentId).subscribe(()=>
    this.route.navigate(["/DisplayDept"]));
  }

}
