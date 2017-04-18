import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


export class Contact {
  constructor(public id: number, public name: string) { }
}

let contacts: Contact[] = [
  new Contact(1, `Luigi Andrea D'Aversa`),
  new Contact(2, 'Giuseppe Garibaldi'),
  new Contact(3, 'Bud Spencer')
];

//let contactsPromise = Promise.resolve(contacts);

//The promise get executed only the first time when you load the page...all the other times you reach the page
// without updating it, there will not be delay...
let contactsPromise:Promise<Contact[]> = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(contacts);
        }, 10000);
    })

let contactsObservable = Observable.of(contacts).delay(2000);
//let contactsObservable = Observable.of(contacts); Without resolver

@Injectable()
export class ContactsService {

  getContacts() {
      //return contactsPromise;  
      return contactsObservable;
  }

  getContact(id: number) {
    //Promise
     //return contactsPromise.then(c => c.find(contact => contact.id == id));
    //Observable
    return contactsObservable.map(x => x.find(x => x.id == id))

  }
}