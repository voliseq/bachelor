import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


/*
import {
  ModalModule, ButtonsModule, TooltipModule, DropdownModule, ProgressbarModule, AlertModule, TabsModule,
  AccordionModule, CarouselModule
} from 'ng2-bootstrap'
*/

import {PopoverModule} from "ng2-popover/src/index";

import {JsonApiService} from './api'

import {LayoutService} from './layout/layout.service'

import {SmartadminLayoutModule} from './layout'

// import {UserService} from './user'


import {I18nModule} from "./i18n/i18n.module";
// import {UserModule} from "./user/user.module";

import {SmartadminWidgetsModule} from "./widgets/smartadmin-widgets.module";

import {UtilsModule} from "./utils/utils.module";
// import {ChatModule} from "./chat/chat.module";
// import {StatsModule} from "./stats/stats.module";
// import {InlineGraphsModule} from "./graphs/inline/inline-graphs.module";
// import {SmartadminFormsLiteModule} from "./forms/smartadmin-forms-lite.module";
// import {SmartProgressbarModule} from "./ui/smart-progressbar/smart-progressbar.module";


@NgModule({
  imports: [
    CommonModule, FormsModule, HttpModule, RouterModule,

  ],
  declarations: [

  ],
  exports: [
    CommonModule, FormsModule, HttpModule, RouterModule,

    // ModalModule,
    // ButtonsModule,
    // TooltipModule,
    // DropdownModule,
    // ProgressbarModule,
    // AlertModule,
    // TabsModule,
    // AccordionModule,
    // CarouselModule,

    PopoverModule,

    SmartadminLayoutModule,

    I18nModule,

    UtilsModule,


    // SmartadminFormsLiteModule,

    // SmartProgressbarModule,

    // InlineGraphsModule,

    SmartadminWidgetsModule,

    // ChatModule,

    // StatsModule,

  ],
  providers: [JsonApiService, LayoutService]

})
export class SmartadminModule {

  static forRoot():ModuleWithProviders {
    return {
      ngModule: SmartadminModule,
      providers: [JsonApiService, LayoutService]
    };
  }

}
