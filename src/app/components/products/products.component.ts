import { Component, inject } from '@angular/core';
import { ProductsAPIResponseModel, Product } from 'src/app/model/interface/Products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productList: Product[] = []
  searchText!: string;

  productService = inject(ProductsService)

  ngOnInit(){
    this.loadProducts()
  }
  
  loadProducts(){
    this.productService.getAllProducts().subscribe((res: ProductsAPIResponseModel) => {
      console.log("response", res)
      this.productList = res.products
      console.log("products ", this.productList)
    }, (error) => {
      console.log("an error occured ", error)
    }
  )
  }

  //emitted data by the event will be received as a parameter
  onSearchEntered(searchValue: string){
    this.searchText = searchValue;
    console.log("search for ", this.searchText)
  }
}
