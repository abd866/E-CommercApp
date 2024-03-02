import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
error!:string;
Isloding:boolean=false;
  constructor(private _auth:AuthService,private _route:Router){}
regestraionForm:FormGroup = new FormGroup({
  name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
  email: new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.pattern(/^[A-Z][a-z0-9]{4,8}$/)]),
  rePassword: new FormControl(null,[Validators.pattern(/^[A-Z][a-z0-9]{4,8}$/)]),
  phone: new FormControl(null,[Validators.pattern(/^(002)?(01)[0125][0-9]{8}$/)]),
},{validators:[this.conformPassword]}as FormControlOptions)

conformPassword(form:FormGroup):void{
  const rePassword=form.get('rePassword');
  const password=form.get('password');
if(rePassword?.value==null){
  rePassword?.setErrors({required:true})
}else if(password?.value!==rePassword.value){
  rePassword?.setErrors({mishmatch:true})
}
}



rgestrationSubmit(form:FormGroup) {
this.Isloding=true;
 if(this.regestraionForm.valid){
  console.log(form.value)
 this._auth.Rgister(form.value).subscribe({
   next:(respons)=>{if(respons.message == 'success'){
    this._route.navigate(['/signin'])
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
