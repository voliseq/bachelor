import {NgModule} from "@angular/core";

import {routing} from "./forms-showcase.routing";
import {ProductsService} from "../shared/products/products.service";
@NgModule({
  declarations: [
  ],
  imports: [
    routing,
  ],
  providers: [ProductsService],
  entryComponents: []
})
export class FormsShowcaseModule {}

