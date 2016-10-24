import {NgModule} from '@angular/core';

import {SmartadminModule} from './shared/smartadmin.module'
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {BrowserModule} from "@angular/platform-browser";
import {UserModule} from "./shared/user/user.module";
import {UserService} from "./shared/user/user.service";
import {TestComponent} from "./test/test.component";
import {SocketService} from "./services/socket-service/socket.service";



@NgModule({
  declarations: [
      AppComponent,
      TestComponent
  ],
  imports: [

    BrowserModule,

    routing,

    SmartadminModule.forRoot(),
    UserModule.forRoot(),
  ],
  providers: [UserService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
