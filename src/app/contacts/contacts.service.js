"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("rxjs/add/operator/delay");
var Contact = (function () {
    function Contact(id, name) {
        this.id = id;
        this.name = name;
    }
    return Contact;
}());
exports.Contact = Contact;
var contacts = [
    new Contact(1, "Luigi Andrea D'Aversa"),
    new Contact(2, 'Giuseppe Garibaldi'),
    new Contact(3, 'Bud Spencer')
];
//let contactsPromise = Promise.resolve(contacts);
//The promise get executed only the first time when you load the page...all the other times you reach the page
// without updating it, there will not be delay...
var contactsPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(contacts);
    }, 10000);
});
var contactsObservable = Observable_1.Observable.of(contacts).delay(2000);
//let contactsObservable = Observable.of(contacts); Without resolver
var ContactsService = (function () {
    function ContactsService() {
    }
    ContactsService.prototype.getContacts = function () {
        //return contactsPromise;  
        return contactsObservable;
    };
    ContactsService.prototype.getContact = function (id) {
        //Promise
        //return contactsPromise.then(c => c.find(contact => contact.id == id));
        //Observable
        return contactsObservable.map(function (x) { return x.find(function (x) { return x.id == id; }); });
    };
    return ContactsService;
}());
ContactsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ContactsService);
exports.ContactsService = ContactsService;
//# sourceMappingURL=contacts.service.js.map