import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ErrorDto, User, Vacuum} from "../user";

@Injectable({
  providedIn: 'root'
})
export class VacuumService {

  private apiUrl = "http://localhost:8080/"
  constructor(private httpClient: HttpClient) { }

  getAllVacuumsByUser() : Observable<Vacuum[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.httpClient.get<Vacuum[]>(`${this.apiUrl}vacuum/allVacuums`, { headers })
  }
  getAllErrors() : Observable<ErrorDto[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.httpClient.get<ErrorDto[]>(`${this.apiUrl}vacuum/errors`, { headers })
  }

  setStart(id : number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
      console.log("USAO U START")
      return this.httpClient.get<any>(`${this.apiUrl}vacuum/start/${id}`,{ headers })
  }
  setStop(id : number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.httpClient.get<any>(`${this.apiUrl}vacuum/stop/${id}`,{ headers })
  }
  setDischarge(id : number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    console.log("USAOOOOOOOOOOO U DISCHARGE")
    return this.httpClient.get<any>(`${this.apiUrl}vacuum/discharge/${id}`,{ headers : headers })
  }

  addVacuum(name : string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    let obj = {
      name : name
    }

    return this.httpClient.post<any>(`${this.apiUrl}vacuum/create`, obj,{ headers : headers })
  }
}
