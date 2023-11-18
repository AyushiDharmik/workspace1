import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDeptComponent } from './post-dept/post-dept.component';


const routes: Routes = [
  {path:'post',component:PostDeptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
