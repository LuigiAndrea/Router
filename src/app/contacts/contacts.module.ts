import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import {routedComponents,routedResolvers,ContactsRoutingModule} from './contacts-routing.module';

import { ContactsService } from './contacts.service';
import { ContactListResolver, ContactDetailResolver } from './contacts-resolvers';

@NgModule({
    imports: [ // module dependencies
        ContactsRoutingModule,
        FormsModule,
        CommonModule
    ],
    declarations: [ // components and directives
        routedComponents
    ],
    providers: [ContactsService,routedResolvers]    // services
})

export class ContactsModule {

}
