import { Component } from '@angular/core';
import { Product } from 'src/app/model/interface/Products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  productList : Product[] = []

  ngOnInit(){

  }

  loadProducts(){
    
  }
}
