import { Injectable } from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ContactsService,Contact } from '../contacts.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactListResolver implements Resolve<Contact[]> {
  constructor(private cs: ContactsService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<Contact[]> | Promise<Contact[]> | Contact[]  {
   return this.cs.getContacts();  
  }
}