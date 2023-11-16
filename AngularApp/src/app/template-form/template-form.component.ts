import { Component, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {



  constructor(private routerActivated: ActivatedRoute) {
    let res: string = this.routerActivated.snapshot.paramMap.get('id');
    
  }
 
  ngOnInit() {

  }
 
  ngOnDestroy() {
    console.log("ngOnDestroy")
  }



  salary: number = 40000;
  submitData(form: NgForm) {
    console.log(form.value)
    console.log(form.valid)
    // console.log(form.invalid)
    // console.log(form.valid)
  }
}
