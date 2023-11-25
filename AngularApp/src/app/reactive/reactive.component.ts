import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  error:string = "";
   demoForm:any;
   constructor(private formBuilder:FormBuilder){
    this.demoForm = this.formBuilder.group({
      email:['',Validators.email],
      password:['',Validators.required],
      opt:['Select',Validators.required],
      gender:['',Validators.required],
      user:['',Validators.required],
      chkValue:[false],
      startDate:['',Validators.required]


    })
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
   display(){
      console.log(this.demoForm.value);
      this.demoForm.get('user').errors;
      console.log(this.demoForm.valid);
   }

}
