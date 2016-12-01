import {Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import {PRODUCTS} from '../../../shared/products/products';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import { Product } from "../../product.model";
import {ProductsService} from "../../../shared/products/products.service";
const URL = 'http://localhost:3000/file';
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
  //uploader
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  checkUploader(){
    console.log(this.uploader.queue);
  };

}
