import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../shared/products/products.service";
import {Product} from "../../shared/products/product.model";

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styles: []
})
export class ProductsViewComponent implements OnInit {

  constructor(private _productsService: ProductsService) { }

  products: Product[] = [];

  ngOnInit() {
    this._productsService.getProducts().subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
    );
  }

}
