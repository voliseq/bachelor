import { Component, OnInit } from '@angular/core';
import {SocketService} from "../services/socket-service/socket.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private _socketService: SocketService) { }

  price = 20;
  socket = null;
  ngOnInit() {

  }


}
