import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "../../auth.guard";
import {TokenComponent} from "./token/token.component";
import {LoginComponent} from "./login/login.component";
import {UserListComponent} from "./user-list/user-list.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {UpdateUserComponent} from "./update-user/update-user.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "user-list",
    component: UserListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "create-user",
    component: CreateUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "update-user",
    component: UpdateUserComponent,
    canActivate: [AuthGuard]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
