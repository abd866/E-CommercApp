import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-rsest-password',
  templateUrl: './rsest-password.component.html',
  styleUrls: ['./rsest-password.component.scss']
})
export class RsestPasswordComponent {
  Isloding:boolean=false;
  error!:string;
  constructor(private _auth:AuthService,private _route:Router){}
 ResetForm:FormGroup=new FormGroup({

    email: new FormControl(null,[Validators.required,Validators.email]),
    newPassword: new FormControl(null,[Validators.pattern(/^[A-Z][a-z0-9]{4,8}$/)]),

  })

 ResetSubmit(form:FormGroup){
    this.Isloding=true;
    if(this.ResetForm.valid){
     console.log(form.value)
    this._auth.restPassword(form.value).subscribe({
      next:(respons)=>{

       this._route.navigate(['/signin'])

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
