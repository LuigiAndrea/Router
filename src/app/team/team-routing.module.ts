import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamListComponent } from './team-list.component';
import { TeamListDefComponent } from './team-list-default/team-list-default.component';
import { TeamListChildrenComponent } from './team-list-children/team-list-children.component'

import { CanDeactivateGuard } from '../core/guard-services';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'project',
        redirectTo: '/team/noProject'
      },
      {
        path: '',
        component: TeamListComponent,
        canDeactivate: [CanDeactivateGuard],
        children: [
          {
            path: '',
            component: TeamListChildrenComponent,
          },
          {
            path: '',
            component: TeamListDefComponent,
            outlet: 'aux'
          }]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule { }

export const routedComponents = [
  TeamListDefComponent,
  TeamListComponent,
  TeamListChildrenComponent
];
