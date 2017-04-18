import { Component } from '@angular/core';
@Component({
  template:  `
    <h3>ADMIN</h3>
    <nav>
      <a [routerLink]="['./']" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
      <a [routerLink]="['./manageContacts']" routerLinkActive="active">Manage Contacts</a>
      <a [routerLink]="['./manageTeam']" routerLinkActive="active">Manage Team</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AdminComponent {
}