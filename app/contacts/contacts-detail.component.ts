import { Component, OnInit, HostBinding, trigger, transition, animate, style, state } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ContactsService, Contact } from './contacts.service';

import 'rxjs/add/operator/map';

@Component({
    selector: 'contacts-detail',
    template: `
    <h2>CONTACT</h2>
    <div *ngIf="contact">
    <h3>{{contact.name}}</h3>
    <div>
        <label>Id: </label>{{contact.id}}</div>
    <div>
        <label>Name: </label>
        <input [(ngModel)]="contact.name" placeholder="contact name"/>
    </div>
    <p>
        <button (click)="goToContactList()">Back</button>
    </p>
    </div>
    <h2 class='error' *ngIf="!contact">No contact found with the ID provided</h2>
    `,
    animations: [
        trigger('routeAnimation', [
            state('*', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', [style({ opacity: 0, transform: 'translateX(-100%)' }), animate('0.2s ease-in')]),
            transition('* => void', [animate('0.5s ease-out', style({ opacity: 0, transform: 'translateY(100%)' }))])
        ])
    ]
})
export class ContactsDetailComponent implements OnInit {
    contact: Contact;
    constructor(private contactsService: ContactsService, private route: ActivatedRoute, private router: Router) { }
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }
    @HostBinding('style.display') get display() {
        return 'block';
    }
    @HostBinding('style.position') get position() {
        return 'absolute';
    }

    ngOnInit() {

        //Observable
        // this.route.params
        //     .forEach((params: Params) => {
        //         let id = params['id'];
        //         this.contactsService.getContact(id)
        //             .subscribe(x => this.contact = x)
        //     });

        //Promises
        // this.route.params
        //     .forEach((params: Params) => {
        //         let id = params['id'];
        //         this.contactsService.getContact(id)
        //             .then(x => this.contact = x)
        //     });

        //Using Resolve
        this.route.data.forEach((data: { contactId: Contact }) => {
            this.contact = data.contactId;
        });

        //this.route.data.subscribe(c => this.contact = c['contactId']);
        //this.contact = this.route.snapshot.data['contactId'];
    }

    goToContactList() {
        let contactId = this.contact ? this.contact.id : null;
        //Pass also as query string the name of the contact selected
        this.router.navigate(['../', { id: contactId, foo: this.contact ? this.contact.name : null }], { relativeTo: this.route });
    }
}