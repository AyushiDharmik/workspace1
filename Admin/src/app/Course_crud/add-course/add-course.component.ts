import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  courses:any[]=[]

  createForm:any
  constructor(private fb:FormBuilder,private ps:PlayersService,private pos:PositionsService) { }
 
  ngOnInit(): void {
    this.createForm=this.fb.group({
      shirtno:['',Validators.required],
      name:['',Validators.required],
      positionid:['',Validators.required],
      appearances:['',Validators.required],
      goals:['',Validators.required]
    })
    this.pos.getPositions().subscribe((data)=>this.positions=data)
  }

  onSubmit(formData:FormGroup){
    this.createForm=formData.value
    this.ps.createPlayer(this.createForm.value).subscribe(()=>{alert("Records added successfully")});
   
  }


}
