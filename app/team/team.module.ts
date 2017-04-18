import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routedComponents,TeamRoutingModule } from './team-routing.module'

@NgModule({
    imports: [ // module dependencies
        TeamRoutingModule,
        FormsModule
    ],
    declarations: [ // components and directives
        routedComponents
    ]
})

export class TeamModule {

}
