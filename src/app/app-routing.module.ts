import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { ProductsComponent } from './Components/products/products.component';
import { CategoryComponent } from './Components/category/category.component';
import { MycartComponent } from './Components/mycart/mycart.component';
import { SigninComponent } from './auth-component/signin/signin.component';
import { SignupComponent } from './auth-component/signup/signup.component';
import { NotfountComponent } from './Components/notfount/notfount.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { authGuard } from './auth.guard';
import { ForgetPasswordComponent } from './auth-component/forget-password/forget-password.component';
import { RsestPasswordComponent } from './auth-component/rsest-password/rsest-password.component';
import { PaymentComponent } from './Components/payment/payment.component';

import { AllordersComponent } from './Components/allorders/allorders.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';

const routes: Routes = [
  {path:"",canActivate:[authGuard],component:SigninComponent},
  {path:"home",canActivate:[authGuard],component:HomeComponent},
  {path:"brands",canActivate:[authGuard],component:BrandsComponent},
  {path:"prouduct",canActivate:[authGuard],component:ProductsComponent},
  {path:"prouductDetails/:ProductId",canActivate:[authGuard],component:ProductDetailsComponent},
  {path:"category",canActivate:[authGuard],component:CategoryComponent},
  {path:"mycart",canActivate:[authGuard],component:MycartComponent},
  {path:"payment",canActivate:[authGuard],component:PaymentComponent},
  {path:"allorders",canActivate:[authGuard],component:AllordersComponent},
  {path:"wishList",canActivate:[authGuard],component:WishlistComponent},
  {path:"signin",component:SigninComponent},
  {path:"signup",component:SignupComponent},
  {path:"forgetPassword",component:ForgetPasswordComponent},
  {path:"resetPasswoed",component:RsestPasswordComponent},
  {path:"**",canActivate:[authGuard],component:NotfountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
