import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  val = {
    firstname:'',
    lastname:'',
    address:'',
    gender:'',
    password:'',

  };
  salt = bcrypt.genSaltSync(10);
  pass = bcrypt.hashSync(this.val.password, this.salt);

    onSubmit(v:NgForm){
      console.log(v.value, v.valid);

      console.log(this.val);

    }
    isDisplay = false;
  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
  }

}