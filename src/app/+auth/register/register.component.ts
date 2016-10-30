import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {User} from "../user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private _authService: AuthService) { }
  myForm: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    console.log(this.myForm);
    const user = new User(
        this.myForm.value.email,
        this.myForm.value.password,
        this.myForm.value.firstName,
        this.myForm.value.lastName
    );
    this._authService.signup(user)
        .subscribe(
            data => {
                var self = this;
                setTimeout(function(){
                    self.router.navigate(['/auth/login']);
                }, 1000)
            },
            error => console.log(error)
        )
    this.myForm.reset();
  };

}
