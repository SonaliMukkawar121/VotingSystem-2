import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userForm = new FormGroup({
    userid: new FormControl(""),
    username: new FormControl(""),
    useraddress: new FormControl(""),
    userdateofbirth: new FormControl(""),
    usergender: new FormControl(""),
    usercontact: new FormControl(""),
    userdistrict: new FormControl("")
  });

  userSubmited(){
    console.log(this.userForm.get("firstname"));
  }
  get UserId(): FormControl{
    return this.userForm.get("userid") as FormControl;
  }
  get UserName(): FormControl{
    return this.userForm.get("username") as FormControl;
  }
  get UserAddress(): FormControl{
    return this.userForm.get("useraddress") as FormControl;
  }
 get UserDateOfBirth(): FormControl{
    return this.userForm.get("userdateofbirth") as FormControl;
  }
  get UserGender(): FormControl{
    return this.userForm.get("usergender") as FormControl;
  }
 get UserContact(): FormControl{
    return this.userForm.get("usercontact") as FormControl;
  }
  get UserDistrict(): FormControl{
    return this.userForm.get("userdistrict") as FormControl;
  }
  
}
