import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './Course_crud/add-course/add-course.component';
import { ViewCourseComponent } from './Course_crud/view-course/view-course.component';


const routes: Routes = [
  // {path:'add',component:AddCourseComponent},
  // {path:'view',component:ViewCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
