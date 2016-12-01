import { Component, OnInit } from '@angular/core';

import {PRODUCTS} from '../../../shared/products/products';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import { Product } from "../../product.model";
import {ProductsService} from "../../../shared/products/products.service";
@Component({

  selector: 'sa-checkout-form',
  templateUrl: 'checkout-form.component.html'
})
export class CheckoutFormComponent implements OnInit {


  myForm: FormGroup;
  public products: Array<any>

  constructor(private _productsService: ProductsService) {}

  onSubmit(){
    let name = this.products[<number>this.myForm.value.name].value;
    const product = new Product(name, parseInt(this.myForm.value.name),  this.myForm.value.description, this.myForm.value.price, this.myForm.value.quantity);
    console.log(product);
    this._productsService.onAddProduct(product).subscribe(
        data => console.log(data),
        error => console.log(error)
    )
  }

  ngOnInit() {
    this.products = PRODUCTS;
    this.myForm = new FormGroup({
      name: new FormControl(0, [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required])
    });
  }

}
