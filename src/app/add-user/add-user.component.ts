import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']

})

export class AddUserComponent implements OnInit {

   addUser1: User = new User();
  constructor(
    private userService: UserService,
    private router: Router

  ) {}

  ngOnInit(): void {}

  saveUser() {
    this.userService.addUser(this.addUser1).subscribe(
      (data) => {
        console.log(data);
        Swal.fire(
          "",
          'User is created successfully',
            'success'    

         )
          alert("User added ")

        // this.goToUserList();

        this.router.navigate(['/userlist']);

    },

   //(error) => console.log(error)

  );

}
goToUserList(): void {

  this.router.navigate(['/userlist']);

}
onSubmit() {

  console.log(this.addUser1);

//  alert('User added successfully');

  this.saveUser();

  // this.goToUserList();

}

}