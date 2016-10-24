import {Routes, RouterModule} from '@angular/router';

import {SocialComponent} from './social'
import {AnalyticsComponent} from './analytics'

export const routes:Routes = [
  {path: '', redirectTo: 'analytics', pathMatch: 'full'},
  {path: 'social', component: SocialComponent, data: {pageTitle: 'Social'}},
  {path: 'analytics', component: AnalyticsComponent, data: {pageTitle: 'Analytics'}}
];

export const routing = RouterModule.forChild(routes);
