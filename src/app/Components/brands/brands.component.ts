import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/Services/brand.service';
import { Brand } from './../../Interfaces/products';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit{
  Brand:any=[];
constructor(private _brand:BrandService){}
  ngOnInit(): void {
    this.getAllBrand()
  }
getAllBrand(){
  this._brand.GetBrands().subscribe({
    next:(response)=>{
      console.log(response.data)
    this.Brand=response.data

    },
    error:(err)=>{
      console.log(err)
    }
  })
}
}
