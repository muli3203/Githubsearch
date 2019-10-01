import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
  user1;
  repos;
  userName: string;


  constructor(public userSer: UserService) {
    this.userSer.getUserDetails().subscribe(user=>{
      this.user1 = user;
    });
    this.userSer.getRepoDetails().subscribe(result=>{
      this.repos = result;
    });
  }

  findUser(){
    this.userSer.updateUsername(this.userName);
    this.userSer.getUserDetails().subscribe(user=>{
      this.user1 = user;
    });
    this.userSer.getRepoDetails().subscribe(result=>{
      this.repos = result;
    });
  }


  ngOnInit() {
  }

}
