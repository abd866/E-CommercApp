import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  Isloding:boolean=false;
  error!:string;
  constructor(private _auth:AuthService,private _route:Router){}
  LoginForm:FormGroup=new FormGroup({

    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.pattern(/^[A-Z][a-z0-9]{4,8}$/)]),

  })

  LoginSubmit(form:FormGroup){
    this.Isloding=true;
    if(this.LoginForm.valid){
     console.log(form.value)
    this._auth.Login(form.value).subscribe({
      next:(respons)=>{if(respons.message == 'success'){
        localStorage.setItem('userToken',respons.token);
        this._auth.saveUserData();
       this._route.navigate(['/home'])
      }
      this.Isloding=false;
     },

      error:(err)=>{
       this.error=err.error.message;
       this.Isloding=false;

      }
     })
    }
  }
}
