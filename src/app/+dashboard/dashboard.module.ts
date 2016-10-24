import {NgModule} from '@angular/core';

import {SmartadminModule} from '../shared/smartadmin.module'

import {routing} from './dashboard.routing';
import {AnalyticsComponent} from './analytics/analytics.component';
import {SocialComponent} from './social/social.component';
import {SocialNetworkComponent} from "./analytics/live-feeds/social-network.component";
import {LiveFeedsComponent} from "./analytics/live-feeds/live-feeds.component";
import {LiveStatsComponent} from "./analytics/live-feeds/live-stats.component";
import {RevenueComponent} from "./analytics/live-feeds/revenue.component";
import {BirdEyeComponent} from './analytics/bird-eye/bird-eye.component';
import {CalendarModule} from "../+calendar/calendar.module";
import { TodoWidgetComponent } from './analytics/todo-widget/todo-widget.component';
import { TodoListComponent } from './analytics/todo-widget/todo-list.component';
import {FlotChartModule} from "../shared/graphs/flot-chart/flot-chart.module";
import {VectorMapModule} from "../shared/graphs/vector-map/vector-map.module";


@NgModule({
  imports: [
    SmartadminModule,
    routing,
    CalendarModule,
    FlotChartModule,
    VectorMapModule,
  ],
  declarations: [
    SocialComponent,

    AnalyticsComponent,

    LiveFeedsComponent,
    LiveStatsComponent,
    RevenueComponent,
    SocialNetworkComponent,



    BirdEyeComponent,

    TodoWidgetComponent,

    TodoListComponent
  ],
  providers: [],
})
export class DashboardModule {

}
