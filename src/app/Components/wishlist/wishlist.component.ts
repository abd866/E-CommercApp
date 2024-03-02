import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/Services/cart.service';
import { WishListService } from 'src/app/Services/wish-list.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{
  cartList:any;
  isloading:boolean=false;
constructor(private _wish:WishListService,private cart:CartService,private toastr:ToastrService){

}
ngOnInit(): void {
    this.getCartItem()

}
getCartItem(){
  this._wish.GetWishListitem().subscribe({
    next:(response)=>{this.cartList=response.data,console.log(this.cartList)},
    error:(err)=>{console.log(err)}
  })
}

dleteCartItem(id:string){
  this.isloading=true;
  this._wish.dleteCartitem(id).subscribe({
    next:(response)=>
    {this.cartList=response.data, this.isloading=false,console.log(this.cartList);
      this._wish.cartNumber.next(response.numOfCartItems)},
    error:(err)=>{console.log(err)}
  })

}
addToCart(productId:string){
  this.cart.addToCart(productId).subscribe({
    next:(response)=>{console.log(response),
      this.cart.cartNumber.next(response.numOfCartItems);
      this.toastr.success(response.message, '', {
        positionClass: 'toast-center-center',
      });
    },
    error:(err)=>{console.log(err)}
  })
}

}
