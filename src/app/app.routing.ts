/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "./shared/layout/app-layouts/auth-layout.component";
import {TestComponent} from "./test/test.component";

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {path: '', component: TestComponent, pathMatch: 'full'},
            {path: 'e-commerce', loadChildren: 'app/+e-commerce/e-commerce.module#ECommerceModule',data:{pageTitle: 'E-commerce'}},
            {path: 'forms', loadChildren: 'app/+forms/forms-showcase.module#FormsShowcaseModule',data:{pageTitle: 'Forms'}},
        ]
    },
    { path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule'}
];

export const routing = RouterModule.forRoot(routes);
