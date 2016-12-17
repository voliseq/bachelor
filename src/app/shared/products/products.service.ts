import { Injectable } from '@angular/core';
import { Http, Headers }  from '@angular/http';
import {Product} from "./product.model";
import {Observable} from 'rxjs/Rx';
import {Image} from "./image.model";
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
        .map(response => {
          const data = response.json().obj;
          let products: Product[] = [];
          for(let i = 0; i < data.length; i++){
            var images = [];
            for(let j = 0; j < data[i].images.length; j++){
              let image = new Image(data[i].images[j].name, data[i].images[j].extension);
              images.push(image);
            }
            let product = new Product(data[i].name, data[i].product_id, data[i].description, data[i].price, data[i].quantity, images);
            products.push(product);
          }
          return products;
        })
        .catch(error => Observable.throw(error.json()));
  }



}
