import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  issucsess:any;
  succsess:any;
constructor(private _auth:AuthService,private router:Router){}
forgetPssword=new FormGroup({
  email:new FormControl(),
})

sendCode(form:FormGroup):void{
this._auth.forgetPassword(form.value).subscribe({
  next:(response)=>{
    console.log(response)
    this.issucsess=response.message;
    document.querySelector('.forgetpassword')?.classList.add('d-none');
    document.querySelector('.rsetcode')?.classList.remove('d-none');
  },
  error:(err)=>{console.log(err)}
})
}

RestCode=new FormGroup({
  resetCode:new FormControl(),
})
VerviyCode(form:FormGroup):void{
  this._auth.vefiyCode(form.value).subscribe({
next:(response)=>{
  this.succsess=response.message;
  if(response.status='Success'){
    this.router.navigate(['/resetPasswoed']);
  }


}

  })
  }
}
