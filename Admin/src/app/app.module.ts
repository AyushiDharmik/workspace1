import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './Course_crud/add-course/add-course.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './service/admin.service';
import { EditCourseComponent } from './Course_crud/edit-course/edit-course.component';
import { ViewCourseComponent } from './Course_crud/view-course/view-course.component';
import { DeleteCourseComponent } from './Course_crud/delete-course/delete-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    EditCourseComponent,
    ViewCourseComponent,
    DeleteCourseComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
