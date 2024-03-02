import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent  implements OnInit{
  cartList:any;
  isloading:boolean=false;
constructor(private _cart:CartService){

}
ngOnInit(): void {
    this.getCartItem()

}
getCartItem(){
  this._cart.GetCartitem().subscribe({
    next:(response)=>{this.cartList=response.data,console.log(this.cartList)},
    error:(err)=>{console.log(err)}
  })
}
updateCartItem(count:number,id:string){
  this.isloading=true;
  if(count==0){
    this.dleteCartItem(id);
  }
  this._cart.updateCartitem(count,id).subscribe({
    next:(response)=>
    {this.cartList=response.data, this.isloading=false,console.log(this.cartList)},
    error:(err)=>{console.log(err)}
  })

}
dleteCartItem(id:string){
  this.isloading=true;
  this._cart.dleteCartitem(id).subscribe({
    next:(response)=>
    {this.cartList=response.data, this.isloading=false,console.log(this.cartList);
      this._cart.cartNumber.next(response.numOfCartItems)},
    error:(err)=>{console.log(err)}
  })

}
}
