import { Component, OnInit } from '@angular/core';
import { ContactsService, Contact } from '../contacts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'contacts-list',
  templateUrl: './contacts-list.component.html'
})
export class ContactsListComponent implements OnInit {

  contacts: Contact[];
  private selectedId: number;

  constructor(private contactsService: ContactsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.selectedId = +params['id'];
    });

    //Without using resolve in the routing
    //***
    //Promise
    //this.contactsService.getContacts().then(c => this.contacts = c);
    //Observable
    //this.contactsService.getContacts().subscribe(c=>this.contacts=c);
    //***

    //Using Resolve
    this.route.data.forEach((data: { contacts: Contact[] }) => {
      this.contacts=data.contacts;
    });

  //Other ways to do the same
  //this.route.data.subscribe(c=>this.contacts=c['contacts']);
  //this.contacts=this.route.snapshot.data['contacts'];
  }

  isSelected(contact: Contact) { return contact.id === this.selectedId; }

  onSelect(contact: Contact) {
    this.router.navigate(['/contacts', contact.id]); //Absolute Path
    // this.router.navigate([contact.id],{ relativeTo: this.route }); //Relative Path
  }
}