import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
cartid:string='';
constructor(private _cart:CartService){}

checkOut=new FormGroup({
  details:new FormControl(),
  phone:new FormControl(),
  city:new FormControl()
})
ngOnInit(): void {
    this.getCartItem();
}
getCartItem(){
  this._cart.GetCartitem().subscribe({
    next:(response)=>{this.cartid=response.data._id},
    error:(err)=>{console.log(err)}
  })
}
payment(form:FormGroup){
  console.log(form.value);
  this._cart.checkOut(this.cartid,form.value).subscribe({
next:(respo)=>{console.log(respo),
  window.location=respo.session.url
}
   })
}
}
