import { Component } from '@angular/core';
import {User} from "../../user";
import {UserServiceService} from "../../services/user-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  userList : User[] | undefined;

  constructor(private service : UserServiceService, private router : Router) {
    this.service.getAllUsers().subscribe(result => {
      this.userList = result;
    })
  }

  deleteUser(user : User){
    this.service.deleteUser(user).subscribe(result => {
      console.log(result);
    })
  }
  updateUser(user : User){
    this.router.navigate(['update-user', {user : JSON.stringify(user)}])
  }

  protected readonly localStorage = localStorage;
}
