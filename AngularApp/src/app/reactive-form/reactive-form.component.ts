import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormArray, FormControl, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])

  });

  // saveData()
  // {
  //   console.log(this.form.value);
    
  // }
  error1:string="";
  error2:string="";
  display()
  {
    if(this.form.get('email').hasError('required'))
    {
      this.error1="Email is required";
    }
    if(this.form.get('password').hasError('required'))
    {
      this.error2="Password is required";
    }
    console.log(this.form.invalid);
  }

}
