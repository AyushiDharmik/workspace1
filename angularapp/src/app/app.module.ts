import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { GetDeptComponent } from './get-dept/get-dept.component';
import { PostDeptComponent } from './post-dept/post-dept.component';
import { CrudService } from './service/crud.service';
import { DeletedeptComponent } from './deletedept/deletedept.component';
import { EditdeptComponent } from './editdept/editdept.component';

@NgModule({
  declarations: [
    AppComponent,
    GetDeptComponent,
    PostDeptComponent,
    DeletedeptComponent,
    EditdeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [HttpClientModule,CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }


