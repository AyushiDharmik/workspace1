import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDeptComponent } from './post-dept/post-dept.component';
import { GetDeptComponent } from './get-dept/get-dept.component';
import { DeletedeptComponent } from './deletedept/deletedept.component';
import { EditdeptComponent } from './editdept/editdept.component';
import { GetbyiddeptComponent } from './getbyiddept/getbyiddept.component';
import { GetempComponent } from './getemp/getemp.component';
import { MenuComponent } from './menu/menu.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { PostEmpComponent } from './post-emp/post-emp.component';



const routes: Routes = [
  {path:'',component:MenuComponent},
  {path:'DisplayDept',component:GetDeptComponent},
  {path:'postdept',component:PostDeptComponent},
  {path:'getbyid/:departmentId',component:GetbyiddeptComponent},
  {path:'deletedept/:departmentId',component:DeletedeptComponent},
  {path:'editdept/:departmentId',component:EditdeptComponent},
  {path:'DisplayEmp',component:GetempComponent},
  // {path:'getbyEmpid/:employeeId',component:GetbyiddeptComponent},
  {path:'postemp',component:PostEmpComponent},
  {path:'deleteEmp/:employeeId',component:DeleteEmpComponent},
  {path:'editEmp/:employeeId',component:EditEmpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
