import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../user";
import {UserServiceService} from "../../services/user-service.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  user : any
  constructor(private service: UserServiceService,private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.user = JSON.parse(params['user']);
    });
  }
  saveChanges(){
    // console.log(this.user)
    this.service.updateUser(this.user).subscribe(result => {
      console.log(result)
    })
  }

}
