import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CrudComponent } from './crud/crud.component';
import { CustompipePipe } from './custompipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoRouteComponent } from './demo-route/demo-route.component';
import { SorryComponent } from './sorry/sorry.component';
import { ServiceUtilitiesService } from './service-utilities.service';
import { RouterGuardService } from './router-guard.service';
import { TokenizationComponent } from './tokenization/tokenization.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CrudComponent,
    CustompipePipe,
    TemplateFormComponent,
    HttpComponent,
    DemoRouteComponent,
    SorryComponent,
    TokenizationComponent,
    ReactiveFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule,ServiceUtilitiesService,RouterGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
