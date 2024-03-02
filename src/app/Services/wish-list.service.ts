import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  headers:any={
    token:localStorage.getItem('userToken')
  }
  cartNumber=new BehaviorSubject(0);
    constructor(private http:HttpClient) {
      this.GetWishListitem().subscribe({
        next:(respon)=>{
          this.cartNumber.next(respon.numOfCartItems)
        }
      })
     }

    addToWish(id:string):Observable<any>{
      return this.http.post('https://ecommerce.routemisr.com/api/v1/wishlist',{productId:id})

    }
    GetWishListitem():Observable<any>{
      return this.http.get('https://ecommerce.routemisr.com/api/v1/wishlist')

    }

    dleteCartitem(id:string):Observable<any>{
      return this.http.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`

     )

    }



  }
