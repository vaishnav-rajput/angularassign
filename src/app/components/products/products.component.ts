import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsAPIResponseModel, Product } from 'src/app/model/interface/Products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  productList: Product[] = []
  searchText!: string;

  constructor(private ref: ChangeDetectorRef){}

  productService = inject(ProductsService)
  router = inject(Router)


  ngOnInit(){
    this.loadProducts()
  }

  editClicked(id: number){
    this.router.navigate(['editProduct', id])
  }
  
  loadProducts(){
    this.productService.getAllProducts().subscribe((res: ProductsAPIResponseModel) => {
      console.log("response", res)
      this.productList = res.products
      console.log("products ", this.productList)
      this.ref.detectChanges()
    }, (error) => {
      console.log("an error occured ", error)
    }
  )
  }

  //emitted data by the event will be received as a parameter
  onSearchEntered(searchValue: string, event: Event){
    event.stopPropagation()
    this.searchText = searchValue;
    console.log("search for ", this.searchText)
  }
}
