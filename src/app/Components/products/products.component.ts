import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/Interfaces/products';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  ProductList:Products[]=[];
  SearchValue:string='';
constructor(private _product:ProductsService,private cart:CartService,private toastr: ToastrService){
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
      items: 4
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

}
