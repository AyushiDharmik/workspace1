import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  title='new';
  myimage:string="assets/images/bg.jpg";
  constructor() { }

  ngOnInit() {
  }

}
