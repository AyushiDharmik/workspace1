import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  
  }
  dataHandler(event)
    {
      let ids:string=event.target.id;
      let data:any=event.target.value;
      switch(ids)
      {
        case "emId":
          this.indiData.email=data;
        break;
        case "psId":
          this.indiData.=data;
        break;
        case "chId":
          this.indiData.=data;
        break;
        case "emId":
          this.indiData.=data;
        break;
        
      }
      console.log(event.target.id)
    }

}
