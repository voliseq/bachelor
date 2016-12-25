import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
@Injectable()
export class SocketService {

  counter = 0;

  a = [];

  constructor() {

    this.socket = io(this.url);

  }


  private socket;
  private url = "http://localhost:3000";


  getSocket(){
    this.a.push(1);
    console.log(this.a);
    return this.socket;
  }
  emitBid(price, room_id, bid_time){
    this.socket.emit('bid', {price: price, room_id: room_id, bid_time: bid_time});
  }
  joinRoom(room_id){
    this.socket.emit('room.join', room_id);
  }


}
