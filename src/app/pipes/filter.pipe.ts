import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/interface/Products';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Product[], searchFor: string): Product[] {
    if(!searchFor) return items;
    return items.filter(item => 
      Object.keys(item).some(key => 
        (item[key as keyof Product] as string).toString().toLowerCase().includes(searchFor.toLowerCase())
      )
    )
  }

  // const filteredItems: Product[] = [];
  
  // for (const item of items) {
  //   const keys = Object.keys(item);
  //   let foundMatch = false;  

  //   for (const key of keys) {
  //     const value = item[key as keyof Product];
  //     if (typeof value === 'string' && value.toLowerCase().includes(searchFor.toLowerCase())) {
  //       foundMatch = true;  
  //       break; 
  //     }
  //   }
    
  //   if (foundMatch) {
  //     filteredItems.push(item);  
  //   }
  // }

  // return filteredItems;

}
