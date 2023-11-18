import { Component, OnInit } from '@angular/core';
import { IDepartment } from '../model/idepartment';
import { CrudService } from '../service/crud.service';


@Component({
  selector: 'app-get-dept',
  templateUrl: './get-dept.component.html',
  styleUrls: ['./get-dept.component.css']
})
export class GetDeptComponent implements OnInit {

  deptData:IDepartment[]=[]

  constructor(private cs:CrudService) {
    this.cs.getAllDept().subscribe(data=>{(this.deptData.push(...data))})
   }

  ngOnInit() {
  }

 


  

}
