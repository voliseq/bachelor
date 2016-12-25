import { Component, OnInit } from '@angular/core';
import {SocketService} from "../../services/socket-service/socket.service";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../shared/products/products.service";
import {Product} from "../../shared/products/product.model";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [SocketService]
})
export class ProductDetailsComponent implements OnInit {

  id: number;
  product2: Product;
  price: number;
  step: number = 5;
  socket = null;
  leader: boolean = false;
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
    const bid_time = Date.now()/100; // in seconds
    this._socketService.emitBid(bid, this.id, bid_time);
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getOneProduct(this.id);
    this.socket = this._socketService.getSocket();
    this._socketService.joinRoom(this.id);
    this.socket.on('room.joined', function(data){});
    var self = this;
    this.socket.on("priceUpdate", function(data){self.price = data;});
    this.socket.on("leader", function(){self.leader = true; console.log(this.leader);});
    this.socket.on('new leader', function(){self.leader = false;});
    this.socket.on('counter', function(time_left){
        console.log(time_left);
    });
    this.socket.on('auction.winner', function(){
      console.log("you won !!!");
    });

  }

}
