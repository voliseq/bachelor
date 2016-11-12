import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
@Injectable()
export class SocketService {
  constructor() {

    this.socket = io(this.url);

  }

  private socket;
  private url = "http://localhost:3000";

  GetSocket(){
    return this.socket;
  }
  EmitBid(){
    this.socket.emit('bid', 30);
  }


}
