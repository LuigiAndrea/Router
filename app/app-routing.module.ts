import { RouterModule, Routes, PreloadAllModules, PreloadingStrategy, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AuthGuard } from './core/guard-services';
import { UrlNotFound } from './core';

class PreloadSelectedModulesList implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data['preload'] ? load() : Observable.of(null);
  }
}

export const APP_ROUTES_MODULE_PROVIDER = [PreloadSelectedModulesList];

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/contacts' },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule', //loading asynchronously 
    canLoad: [AuthGuard] //If a route is protected by `canLoad` guards, the preloaded will not load it.
  },
  {
    path: 'team/:id',
    loadChildren: 'app/team/team.module#TeamModule',
    data: { preload: true }
  },
  {
    path: 'legacy/team/:id',
    redirectTo: 'team/:id'
  },
  { path: '**', component: UrlNotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadSelectedModulesList })],
    //{ preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [APP_ROUTES_MODULE_PROVIDER,
    // { provide: APP_BASE_HREF, useValue: '!%$' }, //Uncomment to add a custom LocationStrategy
    // { provide: LocationStrategy, useClass: HashLocationStrategy }, // Use URL hash in the browser's URL.
    // { provide: LocationStrategy, useClass: PathLocationStrategy } //No nedd to add this line because is the default behavior
  ]
})
export class AppRoutingModule { }
