import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../models/product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Products[] = [];
  filterProducts: Products[] = [];
  category: string;


  constructor(private _productsService: ProductsService,
    private _route: ActivatedRoute
  ) {
    this._productsService.getall()
    .switchMap(products => {
      this.products = products;
      return _route.queryParamMap;
    })
    .subscribe(params => {
        this.category = params.get('category');
        this.filterProducts = (this.category) ? this.products.filter(p => p.category === this.category)
        : this.products;
      });
  }
}
