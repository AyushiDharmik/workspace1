import { Component, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {



  text: string = " ";

  constructor(private routerActivated: ActivatedRoute) {
    let res: string = this.routerActivated.snapshot.paramMap.get('id');
    console.log(res);
    console.log("constructor");
  }
  ngOnChanges(change: SimpleChanges) {
    console.log("ngOnChange");
  }
  ngOnInit() {
    console.log("ngOnInit")
  }
  ngDoCheck() {
    console.log("ngDoCheck")
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit")
  }
  ngAfterContentCheck() {
    console.log("ngAfterContentCheck")
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit")
  }
  NgAfterViewCheck() {
    console.log("NgAfterViewCheck")
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
