import { Component, OnInit } from '@angular/core';
import {SocketService} from "../../services/socket-service/socket.service";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../shared/products/products.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {

  id: number;

  constructor(private _socketService: SocketService, private _productsService: ProductsService, private _route: ActivatedRoute){

  }
  product2: any;
  product = {
    slides: [
      {
        src: 'assets/img/demo/e-comm/detail-1.png',
      },
      {
        src: 'assets/img/demo/e-comm/detail-2.png'
      },
      {
        src: 'assets/img/demo/e-comm/detail-3.png'
      }
    ]
  }

  getOneProduct(id){
    this._productsService.getOneProduct(this.id).subscribe(
        data => console.log(data),
        error => console.log(error)
    )
  };

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getOneProduct(this.id);

  }

}
