import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
UserData=new BehaviorSubject(null);
  constructor(private _http:HttpClient,private _roter:Router) {
    if(localStorage.getItem('userToken')!==null){
      this.saveUserData();
    }
  }
    saveUserData(){
  let ecodededToken:any=localStorage.getItem('userToken');
  let decodedToken:any=jwtDecode(ecodededToken);
this.UserData.next(decodedToken);

   }


  Rgister(FormData:any):Observable<any>{
    return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/signup',FormData);
  }
  Login(FormData:any):Observable<any>{
    return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/signin',FormData);
  }


  logout(){
  localStorage.removeItem('userToken');
  this.UserData.next(null);
  this._roter.navigate(['/signin'])
  }


  forgetPassword(FormData:any):Observable<any>{
    return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',FormData);
  }

  vefiyCode(FormData:any):Observable<any>{
    return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',FormData);
  }

  restPassword(FormData:any):Observable<any>{
    return this._http.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',FormData);
  }
}
