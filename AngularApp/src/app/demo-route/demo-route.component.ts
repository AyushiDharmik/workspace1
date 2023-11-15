import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceUtilitiesService} from "./service-utilities.service";
@Component({
  selector: 'app-demo-route',
  templateUrl: './demo-route.component.html',
  styleUrls: ['./demo-route.component.css']
})
export class DemoRouteComponent implements OnInit {

  constructor(private route:Router) {

   }

   handleRoute()
   {
    this.route.navigate(["/form"]);
   }

  ngOnInit() {
  }

}
