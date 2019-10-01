import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: string;
  apiUrl = 'https://api.github.com/users/';

  constructor(public http: HttpClient) {
    this.userName = 'muli3203';
   }

   getUserDetails() {
     return this.http.get(this.apiUrl + this.userName + '?access_token=' + environment.apiKey);
   }
   getRepoDetails() {
    return this.http.get(this.apiUrl + this.userName + '/repos?access_token=' + environment.apiKey);
   }

   updateUsername(userName: string) {
 this.userName = userName;
   }
}
