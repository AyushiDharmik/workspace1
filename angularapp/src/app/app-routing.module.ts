import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDeptComponent } from './post-dept/post-dept.component';
import { GetDeptComponent } from './get-dept/get-dept.component';
import { DeletedeptComponent } from './deletedept/deletedept.component';



const routes: Routes = [
  {path:'',component:GetDeptComponent},
  {path:'postdept',component:PostDeptComponent},
  {path:'DisplayDept',component:GetDeptComponent},
  {path:'deletedept',component:DeletedeptComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
