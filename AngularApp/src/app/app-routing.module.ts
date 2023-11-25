import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoRouteComponent } from './demo-route/demo-route.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { SorryComponent } from './sorry/sorry.component';
import { RouterGuardService } from './router-guard.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  {path:'', component: DemoRouteComponent },
  {path:'form',component:TemplateFormComponent },
  {path:'form/:id',component:TemplateFormComponent, canActivate:[RouterGuardService]},
  {path:'reactive-form',component:ReactiveFormComponent },
  {path:'reactive',component:ReactiveComponent },
  {path:'**',component:SorryComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
