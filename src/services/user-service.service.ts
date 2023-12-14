import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Jwt, User} from "../user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl = "http://localhost:8080/"
  constructor(private httpClient: HttpClient) { }

  loginUser(username: string, password: string) {
    //U login komponenti se poziva
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    })
    let usr = {
      "username": username,
      "password": password
    }

    return this.httpClient.post<Jwt>(`${this.apiUrl}auth/login`, JSON.stringify(usr), { headers });
  }
  getUserByToken() : Observable<User>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.httpClient.get<User>(`${this.apiUrl}auth/getUser`, { headers })
  }
  getAllUsers() : Observable<User[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.httpClient.get<User[]>(`${this.apiUrl}api/users/all`, { headers })
  }
  createUser(user: User): Observable<User> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.httpClient.post<User>(`${this.apiUrl}api/users/create`, JSON.stringify(user), { headers });
  }
  deleteUser(user: User): Observable<User> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.httpClient.post<User>(`${this.apiUrl}api/users/delete`, JSON.stringify(user), { headers });
  }
  updateUser(user: User): Observable<User> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.httpClient.post<User>(`${this.apiUrl}api/users/update`, JSON.stringify(user), { headers });
  }
}
