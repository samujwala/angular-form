import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, pipe} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loginSuccess:false;
  constructor(private http:HttpClient) {
  }
  login(username: string, password: string): Observable<any> {
    return of([username,password]);
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
