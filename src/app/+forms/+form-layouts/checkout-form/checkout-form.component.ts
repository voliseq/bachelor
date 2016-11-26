import { Component, OnInit } from '@angular/core';

import {COUNTRIES} from '../../../shared/forms/common/countries'
import {FormGroup, Validators, FormControl} from "@angular/forms";
import { Product } from "../../product.model";
@Component({

  selector: 'sa-checkout-form',
  templateUrl: 'checkout-form.component.html'
})
export class CheckoutFormComponent implements OnInit {


  myForm: FormGroup;
  public countries: Array<any>

  constructor() {}

  onSubmit(){

    const product = new Product(this.myForm.value.name, this.myForm.value.description, this.myForm.value.price, this.myForm.value.quantity);


    console.log(this.myForm.value);
    console.log("elo");
  }

  ngOnInit() {
    this.countries = COUNTRIES;
    this.myForm = new FormGroup({
      name: new FormControl(0, [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required])
    });
  }

}
