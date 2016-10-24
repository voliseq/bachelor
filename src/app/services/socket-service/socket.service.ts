import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
@Injectable()
export class SocketService {
  constructor() { }

  private socket;
  private url = "http://localhost:3000";

  connect(){
    this.socket = io(this.url);
  }


}
