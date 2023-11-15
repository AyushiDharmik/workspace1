import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoRouteComponent } from './demo-route/demo-route.component';

const routes: Routes = [{path:'', component:app-demo-route}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
