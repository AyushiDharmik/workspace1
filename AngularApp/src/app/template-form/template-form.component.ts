import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitData(form:NgForm)
  {
    // console.log(form.value)
    // console.log(form.valid)
    // console.log(form.invalid)
    // console.log(form.valid)
  }
}
