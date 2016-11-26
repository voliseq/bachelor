import { Injectable } from '@angular/core';
import { Http }  from '@angular/http';
import {Product} from "../../+forms/product.model";
@Injectable()
export class ProductsService {

  constructor(private _http: Http) {

  }

  products: Product[] = [];

  onAddProduct(Product){
    const body = JSON.stringify(Product);
    const headers = new Headers({'Content-type' : 'application/json'});

  }



}
