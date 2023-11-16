import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {

  
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

}
