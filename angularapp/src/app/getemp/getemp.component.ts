import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-getemp',
  templateUrl: './getemp.component.html',
  styleUrls: ['./getemp.component.css']
})
export class GetempComponent implements OnInit {

  empData:any[]=[]
  

  ngOnInit() {
  }
  constructor(private cs:CrudService) {
    this.cs.getAllDept().subscribe(data=>{this.empData.push(...data); console.log(data)})
   }


}
