import { Component, OnInit } from '@angular/core';
import { CategoiesService } from 'src/app/Services/categoies.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  Categories:any=[];
constructor(private Cat:CategoiesService){}
  ngOnInit(): void {
    this.getAllBrand()
  }
getAllBrand(){
  this.Cat.GetCategoeis().subscribe({
    next:(response)=>{
      console.log(response.data)
    this.Categories=response.data

    },
    error:(err)=>{
      console.log(err)
    }
  })
}
}
