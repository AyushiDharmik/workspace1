import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Component} from './app.component';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    Header,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Header
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
