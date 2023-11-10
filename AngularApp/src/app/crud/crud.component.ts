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
  
indiData:object={email:" ",password:" ",isReady:false};
  userData:object[]=[{}];
 
  dataHandler(event){
    let ids:string = event.target.id;
    let data:any =event.target.value;
 
    switch (ids)
    {
      case "EMID":
        this.indiData={...this.indiData,email:data};
        break;
      case "PSID":
        this.indiData.password=data;
        break;
      case "CHID":
        this.indiData.isReady=data;
        break;
      case "btn1":
        console.log(this.indiData);
        this.userData.push(this.indiData);
        console.log(this.userData);
        break;
      default:
        break;
     
    }
    console.log(event.target.id);
  }

}
