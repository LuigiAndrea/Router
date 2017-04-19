import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactListResolver, ContactDetailResolver } from './contacts-resolvers';

const contacts = [
  {
    path: 'contacts',
    component: ContactsListComponent,
    resolve: { contacts: ContactListResolver }
  }]

const contactId = [
  {
    path: 'contacts/:id',
    component: ContactsDetailComponent,
    resolve: { contactId: ContactDetailResolver }
  }
]

const routes: Routes = [
  ...contacts,
  ...contactId
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule { }

export const routedComponents = [ContactsListComponent, ContactsDetailComponent];
export const routedResolvers = [ContactListResolver,ContactDetailResolver];