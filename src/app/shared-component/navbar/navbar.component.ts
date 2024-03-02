import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  islogin:boolean=false;
  cartNumber!:number;
constructor(private _auth:AuthService,private _cart:CartService){

  _auth.UserData.subscribe({
    next:()=>{
if(_auth.UserData.getValue()!==null){
  this.islogin=true;
}
    }
  })
_cart.cartNumber.subscribe({
  next:(resp)=>{
    this.cartNumber=resp
  }
})

}
logout():void{
  this._auth.logout();
  this.islogin=false;
}
}
