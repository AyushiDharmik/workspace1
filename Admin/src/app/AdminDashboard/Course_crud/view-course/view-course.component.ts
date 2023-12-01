import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  courses:Course[]=[]
  courseData:Course
  courseId:number
 
  constructor(private s:AdminService, private route:Router, private activatedRoute:ActivatedRoute) { 
    this.s.getCourses().subscribe(data=>{this.courses.push(...data); console.log(data)})
  }

  ngOnInit() {
    const tid=this.activatedRoute.snapshot.paramMap.get('courseId')
    this.courseId=Number(tid)
    this.Findbyid(this.courseId)
  }
  Findbyid(courseId:number){
    this.s.FindId(this.courseId).subscribe((data:Course)=>this.courseData=data)
  }
  
  deleteData():void
  {
    this.s.deleteCourse(this.courseId).subscribe()
    // this.route.navigate(["/view"])
    
  }

}
