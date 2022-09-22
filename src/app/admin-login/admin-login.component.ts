import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//export class Login{
//constructor(
// public userName : string,

//public password: string
// ){}
// }
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {

  // admin:Admin =new Admin();

  // constructor(private loginadminservice: LoginadminService) { }

  // ngOnInit(): void {
  // }

  // adminLogin(){
  //   console.log(this.admin)
  //   this.loginadminservice.loginAdmin(this.admin).subscribe(data=>{
  //     alert("Login Successfully")
  //   },error=>alert("Sorry Please enter correct EmailId and Password"));
  // }
  adminlogin: any = {};
  msg: string | undefined;
  showDiv: boolean = false;
  status: string = "admin";
  loginForm: any;
  adminLogin: any;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { }
  
  submitLoginForm(form: NgForm) {

    //for (var value of this.adminlogin) {
      //this.showDiv = (form.value.userid == this.adminlogin.userid) && (form.value.password == this.adminlogin.password)

      if ((form.value.userid == this.adminlogin.userid) && (form.value.password == this.adminlogin.password)) {

        alert("Success");
        this.msg = "success";
        localStorage.setItem('userName', form.value.userid)
        localStorage.setItem('userRole', this.status)
        this.router.navigate(["/dashboard"]);
      }
      else {
        alert("failed")
        this.msg = "enter valid credintials";

      }
   // }


  }
  ngOnInit(): void {
     this.adminlogin = { "userid": "geeta@gmail.com", "password": "Pass@123" };

    // //const user=this.adminLogin.values.userName ==='admin' && this.adminLogin.values.password==='admin';
    // if (this.adminLogin.values.userName === 'admin' && this.adminLogin.values.password === 'admin') {
    //   this.router.navigate(['/dashboard']);

    // }

  }
}