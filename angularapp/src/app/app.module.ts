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
import { GetbyiddeptComponent } from './getbyiddept/getbyiddept.component';
import { GetempComponent } from './getemp/getemp.component';
import { MenuComponent } from './menu/menu.component';
import { PostEmpComponent } from './post-emp/post-emp.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    GetDeptComponent,
    PostDeptComponent,
    DeletedeptComponent,
    EditdeptComponent,
    GetbyiddeptComponent,
    GetempComponent,
    MenuComponent,
    PostEmpComponent,
    DeleteEmpComponent,
    EditEmpComponent
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


