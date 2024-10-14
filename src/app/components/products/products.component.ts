import { Component, inject } from '@angular/core';
import { Product } from 'src/app/model/interface/Products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productList: any[] = []

  productService = inject(ProductsService)

  ngOnInit(){
    this.loadProducts()
  }
  
  loadProducts(){
    this.productService.getAllProducts().subscribe((res: any) => {
      // this.productList = res
      this.productList = res.products
      console.log("products ", this.productList)
    })
  }
}
