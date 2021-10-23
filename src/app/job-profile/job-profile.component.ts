import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.component.html',
  styleUrls: ['./job-profile.component.css']
})
export class JobProfileComponent implements OnInit {

  form = this.fb.group({
    companyName: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    location: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    jobTitle: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    salary: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    employer: [
      '',
      {
        validators: [Validators.required],
      },
    ],

  });




  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.controls.companyName.value);
    console.log(this.form.controls.location.value);
    console.log(this.form.controls.jobTitle.value);
    console.log(this.form.controls.salary.value);
    console.log(this.form.controls.employer.value);
  }

  get companyName() {
    return this.form.controls['companyName'];
  }
  get location() {
    return this.form.controls['location'];
  }
  get jobTitle() {
    return this.form.controls['jobTitle'];
  }
  get salary() {
    return this.form.controls['salary'];
  }
  get employer() {
    return this.form.controls['employer'];
  }

  get valid() {
    return this.form;
  }

  isDisplay2 = false;
  toggleDisplay2() {
    this.isDisplay2 = !this.isDisplay2;
  }


}