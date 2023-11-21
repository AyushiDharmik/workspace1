import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ListComponent } from './players/list/list.component';
import { CreateComponent } from './players/create/create.component';
import { EditComponent } from './players/edit/edit.component';
import { DetailsComponent } from './players/details/details.component';


const routes: Routes = [
  {path:'',component:NavMenuComponent},
  {path:'list',component:ListComponent},
  {path:'create',component:CreateComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'delete/:id',component:DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
