import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
@Injectable()
export class SocketService {
  constructor() {

    this.socket = io(this.url);

  }

  private socket;
  private url = "http://localhost:3000";

  getSocket(){
    return this.socket;
  }
  emitBid(price){
    this.socket.emit('bid', price);
  }


}
