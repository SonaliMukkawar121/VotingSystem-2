import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Vote } from '../vote';

import {VoteService } from '../VoteService/vote.service';
@Component({
  selector: 'app-add-vote',
  templateUrl: './add-vote.component.html',
  styleUrls: ['./add-vote.component.css']

})

export class AddVoteComponent implements OnInit {

   addVote1: Vote = new Vote();
  
  constructor(
    private voteService: VoteService,
    private router: Router

  ) {}

  ngOnInit(): void {}

  saveVote() {
    this.voteService.addVote(this.addVote1).subscribe(
      (data) => {
        console.log(data);
        Swal.fire(
          "",
          'Vote is created successfully',
            'success'    

         )
          //alert("Vote added ")

         //this.goToVoteList();

        this.router.navigate(['/votelist']);

    },

   //(error) => console.log(error)

  );

}



goToVoteList(): void {

  this.router.navigate(['/votelist']);

}



onSubmit() {

  console.log(this.addVote1);

 alert('Vote added successfully');

  this.saveVote();

   //this.goToVoteList();


}



}