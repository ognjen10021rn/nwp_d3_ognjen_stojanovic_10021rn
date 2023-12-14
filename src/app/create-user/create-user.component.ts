import { Component } from '@angular/core';
import {UserServiceService} from "../../services/user-service.service";
import {User} from "../../user";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  user: User = {
    userId: 0,
    username: '',
    can_read_users: false,
    can_update_users: false,
    can_delete_users: false,
    can_create_users: false
  };
  constructor(private service: UserServiceService) {

  }
  createUser() {
   this.service.createUser(this.user).subscribe(result => {
     console.log(result);

   })
  }
}
