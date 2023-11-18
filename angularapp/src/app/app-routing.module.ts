import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDeptComponent } from './post-dept/post-dept.component';



const routes: Routes = [
  {path:'postdept',component:PostDeptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
