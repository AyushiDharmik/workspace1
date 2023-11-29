import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  courses:any[]=[]

  createForm:any
  constructor(private fb:FormBuilder,private adminservice:AdminService) { }
 
  ngOnInit(): void {
    this.createForm=this.fb.group({
      courseName:['',Validators.required],
      description:['',Validators.required],
      duration:['',Validators.required],
      amount:['',Validators.required]
    })
  }

  onSubmit(formData:FormGroup){
    this.createForm=formData.value
    this.adminservice.createCourse(this.createForm.value).subscribe(()=>{alert("Records added successfully")});
   
  }


}
