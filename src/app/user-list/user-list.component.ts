import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {

  constructor(
    
    private userService: UserService,
    private router: Router
   
  ) {}

  user: User[] = [];
  nameSearch: string = '';
  userInformation:any[]=[]
  
 

  ngOnInit(): void {
    console.log("ngOnInit27")
    this.getUsersList();console.log("hi")
  }

 
  private getUsersList() {
   console.log("getUserList33")
    this.userService.getUsersList().subscribe((data ) => {
     console.log("nikhil",data)
      this.user = data;
      
    });
  }
  update(){

    this.router.navigate(['']);

  }
  delete(){

    this.router.navigate(['']);

  }


}