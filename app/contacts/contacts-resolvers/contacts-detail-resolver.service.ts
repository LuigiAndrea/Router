import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ContactsService, Contact } from '../contacts.service';


@Injectable()
export class ContactDetailResolver implements Resolve<Contact> {
    constructor(private cs: ContactsService, private router: Router) { }
    resolve(route: ActivatedRouteSnapshot): Observable<Contact> | Promise<Contact> | Contact {
        let id = +route.params['id'];
        return this.cs.getContact(id);
    }
}