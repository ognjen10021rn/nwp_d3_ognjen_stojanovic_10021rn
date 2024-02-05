import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenComponent } from './token/token.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import {LoginComponent} from "./login/login.component";
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { VacuumListComponent } from './vacuum-list/vacuum-list.component';
import { AddVacuumComponent } from './add-vacuum/add-vacuum.component';
import { ErrorListComponent } from './error-list/error-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TokenComponent,
    LoginComponent,
    UserListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    VacuumListComponent,
    AddVacuumComponent,
    ErrorListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
