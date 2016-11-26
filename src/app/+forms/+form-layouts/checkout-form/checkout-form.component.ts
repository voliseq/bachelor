import { Component, OnInit } from '@angular/core';

import {COUNTRIES} from '../../../shared/forms/common/countries'
import {FormGroup, Validators, FormControl} from "@angular/forms";
@Component({

  selector: 'sa-checkout-form',
  templateUrl: 'checkout-form.component.html'
})
export class CheckoutFormComponent implements OnInit {


  myForm: FormGroup;
  public countries: Array<any>

  constructor() {}

  onSubmit(){
    console.log(this.myForm);
    console.log("elo");
  }

  ngOnInit() {
    this.countries = COUNTRIES;
    this.myForm = new FormGroup({
      product: new FormControl(0, []),
      price: new FormControl('', []),
      quantity: new FormControl('', [])
    });
  }

}
