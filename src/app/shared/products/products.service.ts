import { Injectable } from '@angular/core';
import { Http, Headers }  from '@angular/http';
import {Product} from "../../+forms/product.model";
import {Observable} from 'rxjs/Rx';
@Injectable()
export class ProductsService {

  constructor(private _http: Http) {

  }

  products: Product[] = [];

  onAddProduct(product: Product){
    console.log(product);
    const body = JSON.stringify(product);
    const headers = new Headers({'Content-type' : 'application/json'});

    return this._http.post('http://localhost:3000/product', body, {headers: headers})
        .map(response => response.json())
        .catch(error => Observable.throw(error.json()))
        .share();
  };

  getProducts(){
    return this._http.get('http://localhost:3000/product')
        .map(response => response.json())
        .catch(error => Observable.throw(error.json()));
  }



}
