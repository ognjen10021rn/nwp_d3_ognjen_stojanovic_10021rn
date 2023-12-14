import { Component } from '@angular/core';
import {User} from "../../user";
import {UserServiceService} from "../../services/user-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  usr : User | undefined
  constructor(private service : UserServiceService) {
    if(localStorage.getItem('token') != null){
      this.service.getUserByToken().subscribe(result => {
        this.usr = result;
      });
    }
  }


}
