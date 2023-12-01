import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './AdminDashboard/add-course/add-course.component';
import { ViewCourseComponent } from './AdminDashboard/Course_crud/view-course/view-course.component';
import { AdmissionComponent } from './AdminDashboard/View/admission/admission.component';
import { EnquiryComponent } from './AdminDashboard/View/enquiry/enquiry.component';
import { PaymentComponent } from './AdminDashboard/View/payment/payment.component';
import { ViewAdmissionComponent } from './OfficeDashboard/view-admission/view-admission.component';
import { PaymentHistoryComponent } from './OfficeDashboard/payment-history/payment-history.component';


const routes: Routes = [
  {path:'add',component:AddCourseComponent},
  {path:'view',component:ViewCourseComponent},
  {path:'admission',component:AdmissionComponent},
  {path:'enquiry',component:EnquiryComponent},
  {path:'payment',component:PaymentComponent},
  {path:'view-admission',component:ViewAdmissionComponent},
  {path:'payment-history',component:PaymentHistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
