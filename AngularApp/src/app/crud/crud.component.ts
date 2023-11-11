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
  date=new Date();
  money:number=10000;
  
  // indiData: object = { email: " ", password: " ", isReady: false };
  // userData: object[] = [{}];

  // dataHandler(event) {
  //   let ids: string = event.target.id;
  //   let data: any = event.target.value;

  //   switch (ids) {
  //     case "EMID":
  //       this.indiData = { ...this.indiData, email: data };
  //       if(this.userData.length!=0)
  //       {
  //         console.log("working..")
  //         let value=this.userData.find(x=>x.email==this.indiData.email);
  //         this.indiData={...value,password:value.password,isReady:value.isReady}
  //         console.log(value);
  //       }
  //       break;

  //     case "PSID":
  //       this.indiData = { ...this.indiData, password: data };
  //       break;

  //     case "CHID":
  //       let chkVal=event.target.checked;
  //       this.indiData = { ...this.indiData, isReady: chkVal };
  //       break;

  //     case "btn1":
  //       console.log(this.indiData);
  //       this.userData.push(this.indiData);
  //       console.log(this.userData);
  //       break;

  //     case "btn2":
  //         let value=this.userData.find(x=>x.email==this .indiData.email);
  //         console.log(value)
  //         this.userData.push(this.indiData);

  //         break;

  //     default:
  //       break;

  //   }
  //   console.log(event.target.id);
  // }

}
