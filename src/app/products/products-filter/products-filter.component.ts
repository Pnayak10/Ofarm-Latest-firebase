import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent  {
  category$;
 @Input('category') category;

  constructor( private _categoryService: CategoryService) {
    this.category$ = this._categoryService.getCategories();
  }

}
