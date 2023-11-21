import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CreateComponent } from './players/create/create.component';
import { ListComponent } from './players/list/list.component';
import { EditComponent } from './players/edit/edit.component';
import { DetailsComponent } from './players/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CreateComponent,
    ListComponent,
    EditComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
