import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamListDefComponent } from './team-list-def.component';
import { TeamListComponent } from './team-list.component';
import { TeamListChildrenComponent } from './team-list-children.component'

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
