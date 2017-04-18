import { Component} from '@angular/core';

import { AuthService } from './core';

@Component({
  selector: 'my-app',
  template: `
    <app-name [userName]='user'></app-name>
    <nav>
      <a [routerLink]="['/contacts']" routerLinkActive="active">Contact List</a>
      <a [routerLink]="['/team',12]" routerLinkActive="active">team</a>
      <a [routerLink]="['/admin']" routerLinkActive="active">Admin</a>
      <a [routerLink]="['/login']" routerLinkActive="active">Authentication</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent  {
  user: string = 'LuigiAndrea';
}