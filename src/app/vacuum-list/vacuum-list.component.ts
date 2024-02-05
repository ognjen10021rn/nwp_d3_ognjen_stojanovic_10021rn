import { Component } from '@angular/core';
import {VacuumService} from "../../services/vacuum.service";
import {Vacuum} from "../../user";

@Component({
  selector: 'app-vacuum-list',
  templateUrl: './vacuum-list.component.html',
  styleUrls: ['./vacuum-list.component.css']
})
export class VacuumListComponent {

  vacuums: Vacuum[] | undefined;
  constructor(private vacuumService: VacuumService) {
    this.vacuumService.getAllVacuumsByUser().subscribe(result => {
      this.vacuums = result;
    });
  }

  onStart(id : number){
    this.vacuumService.setStart(id).subscribe( result => {
      console.log(result)
    })
  }
  onStop(id : number){
    this.vacuumService.setStop(id).subscribe( result => {
      console.log(result)
    })
  }
  onDischarge(id : number){
    this.vacuumService.setDischarge(id).subscribe( result => {
      console.log(result)
    })
    console.log("DISCHARGE" + id)
  }


}
