import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {AuthService} from "../auth.service";
import {User} from "../user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private _authService: AuthService) { }

  myForm: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl('',[Validators.required, this.isEmail]),
      password: new FormControl('',Validators.required)
    })
  }

  onSubmit(){
    const user = new User(this.myForm.value.email, this.myForm.value.password)
    this._authService.signin(user)
        .subscribe(
            data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId
                );
                console.log(data);
                var self = this;
                setTimeout(function(){
                    self.router.navigate(['/']);
                }, 1000)
            },
            error => console.log(error)
        )
  }

  private isEmail(control: FormControl): {[s: string]: boolean}{
    if(!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")){
      return {invalidMail: true};
    }
  }

}
