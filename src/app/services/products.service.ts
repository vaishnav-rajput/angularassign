import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/interface/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  offset: number = 0;

  increaseOffset() : number {
    return this.offset + 10;
  }

  decreaseOffset() : number{
    this.offset = Math.max(0, this.offset -10);
    return this.offset;
  }



  getAllProducts(): Observable<Product>{
    return this.http.get<Product>("https://api.escuelajs.co/api/v1/products?offset=" + this.offset + "&limit=10")
  }
}
