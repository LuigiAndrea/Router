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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var contacts_list_component_1 = require("./contacts-list.component");
var contacts_detail_component_1 = require("./contacts-detail.component");
var contacts_resolvers_1 = require("./contacts-resolvers");
var contacts = [
    {
        path: 'contacts',
        component: contacts_list_component_1.ContactsListComponent,
        resolve: { contacts: contacts_resolvers_1.ContactListResolver }
    }
];
var contactId = [
    {
        path: 'contacts/:id',
        component: contacts_detail_component_1.ContactsDetailComponent,
        resolve: { contactId: contacts_resolvers_1.ContactDetailResolver }
    }
];
var routes = contacts.concat(contactId);
var ContactsRoutingModule = (function () {
    function ContactsRoutingModule() {
    }
    return ContactsRoutingModule;
}());
ContactsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    }),
    __metadata("design:paramtypes", [])
], ContactsRoutingModule);
exports.ContactsRoutingModule = ContactsRoutingModule;
exports.routedComponents = [contacts_list_component_1.ContactsListComponent, contacts_detail_component_1.ContactsDetailComponent];
exports.routedResolvers = [contacts_resolvers_1.ContactListResolver, contacts_resolvers_1.ContactDetailResolver];
//# sourceMappingURL=contacts-routing.module.js.map