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
var contacts_service_1 = require("./contacts.service");
var router_1 = require("@angular/router");
var ContactsListComponent = (function () {
    function ContactsListComponent(contactsService, route, router) {
        this.contactsService = contactsService;
        this.route = route;
        this.router = router;
    }
    ContactsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.selectedId = +params['id'];
        });
        //Without using resolve in the routing
        //***
        //Promise
        //this.contactsService.getContacts().then(c => this.contacts = c);
        //Observable
        //this.contactsService.getContacts().subscribe(c=>this.contacts=c);
        //***
        //Using Resolve
        this.route.data.forEach(function (data) {
            _this.contacts = data.contacts;
        });
        //Other ways to do the same
        //this.route.data.subscribe(c=>this.contacts=c['contacts']);
        //this.contacts=this.route.snapshot.data['contacts'];
    };
    ContactsListComponent.prototype.isSelected = function (contact) { return contact.id === this.selectedId; };
    ContactsListComponent.prototype.onSelect = function (contact) {
        this.router.navigate(['/contacts', contact.id]); //Absolute Path
        // this.router.navigate([contact.id],{ relativeTo: this.route }); //Relative Path
    };
    return ContactsListComponent;
}());
ContactsListComponent = __decorate([
    core_1.Component({
        selector: 'contacts-list',
        template: "\n    <h2>Contacts</h2> \n    <ul class=\"items\">\n      <li *ngFor=\"let contact of contacts\" [class.selected]=\"isSelected(contact)\" (click)=\"onSelect(contact)\">\n        <span class=\"badge\">{{contact.id}}</span> {{contact.name}}\n      </li>\n    </ul>\n  "
    }),
    __metadata("design:paramtypes", [contacts_service_1.ContactsService, router_1.ActivatedRoute, router_1.Router])
], ContactsListComponent);
exports.ContactsListComponent = ContactsListComponent;
//# sourceMappingURL=contacts-list.component.js.map