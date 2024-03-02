import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './shared-component/footer/footer.component';
import { NotfountComponent } from './Components/notfount/notfount.component';
import { NavbarComponent } from './shared-component/navbar/navbar.component';
import { CategoryComponent } from './Components/category/category.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { ProductsComponent } from './Components/products/products.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { MycartComponent } from './Components/mycart/mycart.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SigninComponent } from './auth-component/signin/signin.component';
import { SignupComponent } from './auth-component/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ForgetPasswordComponent } from './auth-component/forget-password/forget-password.component';
import { RsestPasswordComponent } from './auth-component/rsest-password/rsest-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import { PaymentComponent } from './Components/payment/payment.component';
import { AllordersComponent } from './Components/allorders/allorders.component';
import { SearchPipe } from './search.pipe';
import { AddHeaderInterceptor } from './add-header.interceptor';
import { LoaderComponent } from './Components/loader/loader.component';
import { LoaderInterceptor } from './loader.interceptor';
import { MainSliderComponent } from './Components/main-slider/main-slider.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NotfountComponent,
    NavbarComponent,
    CategoryComponent,
    BrandsComponent,
    ProductsComponent,
    WishlistComponent,
    MycartComponent,
    ProfileComponent,
    SigninComponent,
    SignupComponent,
    ProductDetailsComponent,
    ForgetPasswordComponent,
    RsestPasswordComponent,
    PaymentComponent,
    AllordersComponent,
    SearchPipe,
    LoaderComponent,
    MainSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AddHeaderInterceptor,
    multi:true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
 },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
