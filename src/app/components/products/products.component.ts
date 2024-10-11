import { Component, inject } from '@angular/core';
import { Product } from 'src/app/model/interface/Products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productList: Product[] = []

  productService = inject(ProductsService)

  ngOnInit(){
    
  }
  
  loadProducts(){
    this.productService.getAllProducts().subscribe((res: Product) => {
      // this.productList = res
    })
  }
}
