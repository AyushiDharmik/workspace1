import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  courses:Course[]=[]
 
  constructor(private s:AdminService) { 
    this.s.getCourses().subscribe(data=>{this.courses.push(...data); console.log(data)})
  }

  ngOnInit() {
  }

}
