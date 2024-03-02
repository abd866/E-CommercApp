import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
constructor(private _activated:ActivatedRoute,private _Prdouct:ProductsService,private cart:CartService,private toastr: ToastrService){}
productdetial:any;

ngOnInit(): void {

    let ProductId=this._activated.snapshot.params['ProductId']
    console.log(ProductId);
    this._Prdouct.GetProductsDetials(ProductId).subscribe({
      next:(respons)=>{this.productdetial=respons.data},
      error:(err)=> {console.log(err)},
    })

}
addToCart(productId:string){
  this.cart.addToCart(productId).subscribe({
    next:(response)=>{console.log(response),
      this.toastr.success(response.message, '', {
        positionClass: 'toast-center-top',
      });
    },
    error:(err)=>{console.log(err)}
  })
}
}
