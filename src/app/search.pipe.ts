import { Pipe, PipeTransform } from '@angular/core';
import { Products } from './Interfaces/products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Products[], searchWord:string): Products[] {
    return products.filter((product)=>{return product.category.name.includes(searchWord)|| product.title.includes(searchWord)});
  }

}
