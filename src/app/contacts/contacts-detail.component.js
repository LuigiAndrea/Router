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
var router_1 = require("@angular/router");
var contacts_service_1 = require("./contacts.service");
require("rxjs/add/operator/map");
var ContactsDetailComponent = (function () {
    function ContactsDetailComponent(contactsService, route, router) {
        this.contactsService = contactsService;
        this.route = route;
        this.router = router;
    }
    Object.defineProperty(ContactsDetailComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactsDetailComponent.prototype, "display", {
        get: function () {
            return 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactsDetailComponent.prototype, "position", {
        get: function () {
            return 'absolute';
        },
        enumerable: true,
        configurable: true
    });
    ContactsDetailComponent.prototype.ngOnInit = function () {
        //Observable
        // this.route.params
        //     .forEach((params: Params) => {
        //         let id = params['id'];
        //         this.contactsService.getContact(id)
        //             .subscribe(x => this.contact = x)
        //     });
        var _this = this;
        //Promises
        // this.route.params
        //     .forEach((params: Params) => {
        //         let id = params['id'];
        //         this.contactsService.getContact(id)
        //             .then(x => this.contact = x)
        //     });
        //Using Resolve
        this.route.data.forEach(function (data) {
            _this.contact = data.contactId;
        });
        //this.route.data.subscribe(c => this.contact = c['contactId']);
        //this.contact = this.route.snapshot.data['contactId'];
    };
    ContactsDetailComponent.prototype.goToContactList = function () {
        var contactId = this.contact ? this.contact.id : null;
        //Pass also as query string the name of the contact selected
        this.router.navigate(['../', { id: contactId, foo: this.contact ? this.contact.name : null }], { relativeTo: this.route });
    };
    return ContactsDetailComponent;
}());
__decorate([
    core_1.HostBinding('@routeAnimation'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ContactsDetailComponent.prototype, "routeAnimation", null);
__decorate([
    core_1.HostBinding('style.display'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ContactsDetailComponent.prototype, "display", null);
__decorate([
    core_1.HostBinding('style.position'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ContactsDetailComponent.prototype, "position", null);
ContactsDetailComponent = __decorate([
    core_1.Component({
        selector: 'contacts-detail',
        template: "\n    <h2>CONTACT</h2>\n    <div *ngIf=\"contact\">\n    <h3>{{contact.name}}</h3>\n    <div>\n        <label>Id: </label>{{contact.id}}</div>\n    <div>\n        <label>Name: </label>\n        <input [(ngModel)]=\"contact.name\" placeholder=\"contact name\"/>\n    </div>\n    <p>\n        <button (click)=\"goToContactList()\">Back</button>\n    </p>\n    </div>\n    <h2 class='error' *ngIf=\"!contact\">No contact found with the ID provided</h2>\n    ",
        animations: [
            core_1.trigger('routeAnimation', [
                core_1.state('*', core_1.style({ opacity: 1, transform: 'translateX(0)' })),
                core_1.transition('void => *', [core_1.style({ opacity: 0, transform: 'translateX(-100%)' }), core_1.animate('0.2s ease-in')]),
                core_1.transition('* => void', [core_1.animate('0.5s ease-out', core_1.style({ opacity: 0, transform: 'translateY(100%)' }))])
            ])
        ]
    }),
    __metadata("design:paramtypes", [contacts_service_1.ContactsService, router_1.ActivatedRoute, router_1.Router])
], ContactsDetailComponent);
exports.ContactsDetailComponent = ContactsDetailComponent;
//# sourceMappingURL=contacts-detail.component.js.map