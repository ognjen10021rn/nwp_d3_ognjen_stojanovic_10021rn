import { Component } from '@angular/core';
import {VacuumService} from "../../services/vacuum.service";

@Component({
  selector: 'app-add-vacuum',
  templateUrl: './add-vacuum.component.html',
  styleUrls: ['./add-vacuum.component.css']
})
export class AddVacuumComponent {

  name : String = ''
  constructor(private vacuumService: VacuumService) {
  }

  addNewVacuum(){

  }
}
