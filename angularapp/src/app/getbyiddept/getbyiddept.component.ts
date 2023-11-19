import { Component, OnInit } from '@angular/core';
import { IDepartment } from '../model/idepartment';
import { CrudService } from '../service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-getbyiddept',
  templateUrl: './getbyiddept.component.html',
  styleUrls: ['./getbyiddept.component.css']
})
export class GetbyiddeptComponent implements OnInit {
  departmentId:number
  deptData:IDepartment={departmentId:0, departmentName:"", employees:null}

  constructor(private cs:CrudService, private route:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const tid=this.activatedRoute.snapshot.paramMap.get('departmentId')
    this.departmentId=Number(tid);
    this.cs.FindId(this.departmentId).subscribe((data:IDepartment)=>this.deptData=data)
  }


}
