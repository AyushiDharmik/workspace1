import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CrudComponent } from './crud/crud.component';
import { CustompipePipe } from './custompipe.pipe';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoRouteComponent } from './demo-route/demo-route.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CrudComponent,
    CustompipePipe,
    TemplateFormComponent,
    HttpComponent,
    DemoRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
