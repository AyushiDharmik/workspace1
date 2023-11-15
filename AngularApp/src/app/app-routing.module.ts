import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoRouteComponent } from './demo-route/demo-route.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {path:'', component: DemoRouteComponent },
  {path:'form',component:TemplateFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
