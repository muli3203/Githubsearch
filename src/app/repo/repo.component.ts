import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { UserService } from '../user.service';
=======
>>>>>>> e066fe141d884ae824d3c5f0cad0696a243b1b46

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

<<<<<<< HEAD
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

=======
  constructor() { }
>>>>>>> e066fe141d884ae824d3c5f0cad0696a243b1b46

  ngOnInit() {
  }

}
