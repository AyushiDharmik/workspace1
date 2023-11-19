import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDeptComponent } from './post-dept/post-dept.component';
import { GetDeptComponent } from './get-dept/get-dept.component';
import { DeletedeptComponent } from './deletedept/deletedept.component';
import { EditdeptComponent } from './editdept/editdept.component';
import { GetbyiddeptComponent } from './getbyiddept/getbyiddept.component';



const routes: Routes = [
  {path:'',component:GetDeptComponent},
  {path:'postdept',component:PostDeptComponent},
  {path:'DisplayDept',component:GetDeptComponent},
  {path:'getbyid/:departmentId',component:GetbyiddeptComponent},
  {path:'deletedept/:departmentId',component:DeletedeptComponent},
  {path:'editdept/:departmentId',component:EditdeptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
