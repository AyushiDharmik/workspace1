import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoRouteComponent } from './demo-route/demo-route.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { SorryComponent } from './sorry/sorry.component';

const routes: Routes = [
  {path:'', component: DemoRouteComponent },
  {path:'form',component:TemplateFormComponent },
  {path:'form/:id',component:TemplateFormComponent },
  {path:'**',component:SorryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
