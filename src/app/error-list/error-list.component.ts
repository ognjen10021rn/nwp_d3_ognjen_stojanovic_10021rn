import { Component } from '@angular/core';
import {VacuumService} from "../../services/vacuum.service";
import {ErrorDto} from "../../user";

@Component({
  selector: 'app-error-list',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.css']
})
export class ErrorListComponent {
  errorList : ErrorDto[] | undefined
  constructor(private vacuumService : VacuumService) {
    this.vacuumService.getAllErrors().subscribe(result => {
      this.errorList = result
    })
  }


}
