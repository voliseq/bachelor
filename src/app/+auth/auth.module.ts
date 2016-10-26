import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LockedComponent } from './locked/locked.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import {routing} from "./auth.routing";
import { AuthComponent } from './auth.component';
import {AuthService} from "./auth.service";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, LockedComponent,
    RegisterComponent, ForgotComponent, AuthComponent],
  providers: [AuthService]
})
export class AuthModule { }
