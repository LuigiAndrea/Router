import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageContactsComponent } from './manage-contacts/manage-contacts.component';
import { ManageTeamComponent } from './manage-team/manage-team.component';
import { AdminComponent } from './admin.component';

import { AuthGuard } from '../core/guard-services';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard], //Do the Same check as canLoad Guard in app-routing.module
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'manageContacts', component: ManageContactsComponent },
          { path: 'manageTeam', component: ManageTeamComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

export const routedComponents = [
  AdminDashboardComponent,
  ManageContactsComponent,
  ManageTeamComponent,
  AdminComponent
];