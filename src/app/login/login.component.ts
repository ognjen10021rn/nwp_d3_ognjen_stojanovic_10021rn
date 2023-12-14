import { Component } from '@angular/core';
import {UserServiceService} from "../../services/user-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  user = {
   "username": '',
    "password": ''
}
  username : string = 'user1'
  password : string = 'user1'

  constructor(private userService : UserServiceService, private router : Router) {
  }
  submit(){
    if(this.username !== '' && this.password !== ''){
      this.userService.loginUser(this.username, this.password).subscribe(result => {
        console.log(result)
        localStorage.setItem('token', result.jwt);
        this.router.navigate(['/'])
      })
    }else{
      console.log("Password i username su null")
    }
  }


}
