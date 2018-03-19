import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
  @Input('product') product: Products;
  @Input('showAction') showAction= true;
  constructor() { }

}
