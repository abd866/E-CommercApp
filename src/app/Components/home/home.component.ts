import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { Products } from '../../Interfaces/products';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/Services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishListService } from 'src/app/Services/wish-list.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  ProductList:Products[]=[];
  SearchValue:string='';
constructor(private _product:ProductsService,private cart:CartService,private toastr: ToastrService,private _WISH:WishListService){
}
ngOnInit(): void {

    this._product.GetProducts().subscribe({
      next:(respons)=>{this.ProductList=respons.data},
      error:(err)=>{console.log(err)}

    })
    this.getcatgoeries();
}
catgoryList:any[]=[]
getcatgoeries(){
  this._product.GetGatgries().subscribe({
    next:(response)=>{
      this.catgoryList=response.data;
      console.log(this.catgoryList)
    }

  })
}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 6
    }
  },
  nav: true
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


addToWish(productId:string){
  this._WISH.addToWish(productId).subscribe({
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
