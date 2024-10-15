import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/interface/Products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
 

  @Input() product : Product


}
