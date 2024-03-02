import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
headers:any={
  token:localStorage.getItem('userToken')
}
cartNumber=new BehaviorSubject(0);
  constructor(private http:HttpClient) {
    this.GetCartitem().subscribe({
      next:(respon)=>{
        this.cartNumber.next(respon.numOfCartItems)
      }
    })
   }

  addToCart(id:string):Observable<any>{
    return this.http.post('https://ecommerce.routemisr.com/api/v1/cart',{productId:id})

  }
  GetCartitem():Observable<any>{
    return this.http.get('https://ecommerce.routemisr.com/api/v1/cart')

  }
  updateCartitem(count:number,id:string):Observable<any>{
    return this.http.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {count:count})

  }
  dleteCartitem(id:string):Observable<any>{
    return this.http.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`

   )

  }


  checkOut(id:string,formdata:any):Observable<any>{
    return this.http.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
    {shippingAddress:formdata}
  )

  }
}
