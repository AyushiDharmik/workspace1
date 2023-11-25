import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormArray, FormControl, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  scheduleForm: FormGroup;

  // Define a list of days and time slots
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  timeSlots = ['1 pm to 3 pm', '3 pm to 5 pm', '5 pm to 7 pm'];

  // Define a list of preferred packages (replace with your actual package list)
  preferredPackages = ['Package 1', 'Package 2', 'Package 3'];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createForm() {
    this.scheduleForm = this.fb.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      area: ['', Validators.required],
      pincode: ['', Validators.required],
      pickupDay: ['', Validators.required],
      pickupTimeSlot: ['', Validators.required],
      packageId: ['', Validators.required]
    });
  }

  

  

 

}
