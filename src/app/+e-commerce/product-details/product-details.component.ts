import { Component, OnInit } from '@angular/core';
import {SocketService} from "../../services/socket-service/socket.service";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../shared/products/products.service";
import {Product} from "../../shared/products/product.model";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  providers: [SocketService]
})
export class ProductDetailsComponent implements OnInit {

  id: number;
  product2: Product;
  price: number;
  step: number = 5;
  socket = null;
  constructor(private _socketService: SocketService, private _productsService: ProductsService, private _route: ActivatedRoute){

  }

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
  };

  getOneProduct(id){
    this._productsService.getOneProduct(this.id).subscribe(
        data => {
          this.product2 = data;
          this.price = this.product2.price;

        },
        error => console.log(error)
    )
  };

  onBid(){
    const bid = this.price + this.step;
    this._socketService.emitBid(bid, this.id);
  }

  ngOnInit() {
    console.log("details");
    this._route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getOneProduct(this.id);
    this.socket = this._socketService.getSocket();
    this._socketService.joinRoom(this.id);
    var self = this;

    this.socket.on('room.joined', function(data){
        console.log(data);
    });

    this.socket.on("priceUpdate", function(data){
      self.price = data;
    });

    this.socket.on("leader", function(){
      console.log("i am the leader NOW !!");
    });

    console.log(typeof(this.id));

  }

}
