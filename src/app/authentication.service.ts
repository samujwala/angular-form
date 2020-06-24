import { Injectable } from '@angular/core';
import {Observable, from} from 'rxjs';
import {first, last} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loginSuccess:false;
  constructor() {
  }
  login(username: string, password: string): Observable<any> {
    return from([username,password]).pipe(first(name=>name.length>0,'Login Success'),
      last(pass=>pass.length>0,'Login Success')
    );
  }
  //flag to set the login is successfull
  setLoginStatus(value){
    this.loginSuccess = value;
  }
  //retrive login status
  getLoginStatus(){
    return this.loginSuccess;
  }

}
