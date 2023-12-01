import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './AdminDashboard/add-course/add-course.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './service/admin.service';
import { EditCourseComponent } from './AdminDashboard/Course_crud/edit-course/edit-course.component';
import { ViewCourseComponent } from './AdminDashboard/Course_crud/view-course/view-course.component';
import { DeleteCourseComponent } from './AdminDashboard/Course_crud/delete-course/delete-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavMenuComponent } from './AdminDashboard/nav-menu/nav-menu.component';
import { AdmissionComponent } from './AdminDashboard/View/admission/admission.component';
import { PaymentComponent } from './AdminDashboard/View/payment/payment.component';
import { EnquiryComponent } from './AdminDashboard/View/enquiry/enquiry.component';
import { ViewAdmissionComponent } from './OfficeDashboard/view-admission/view-admission.component';
import { PaymentHistoryComponent } from './OfficeDashboard/payment-history/payment-history.component';
import { MenuComponent } from './OfficeDashboard/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    EditCourseComponent,
    ViewCourseComponent,
    DeleteCourseComponent,
    NavMenuComponent,
    AdmissionComponent,
    PaymentComponent,
    EnquiryComponent,
    ViewAdmissionComponent,
    PaymentHistoryComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
