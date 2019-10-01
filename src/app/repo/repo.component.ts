import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

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
