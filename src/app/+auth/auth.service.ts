import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {User} from "./user.model";
import {Response, Headers, Http} from "@angular/http";

@Injectable()
export class AuthService {

  constructor(private _http: Http){}

  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  signup(user: User){
    console.log(user);
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post('http://localhost:3000/user', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
  }

  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
