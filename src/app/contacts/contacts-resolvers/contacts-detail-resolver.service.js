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
var contacts_service_1 = require("../contacts.service");
var ContactDetailResolver = (function () {
    function ContactDetailResolver(cs, router) {
        this.cs = cs;
        this.router = router;
    }
    ContactDetailResolver.prototype.resolve = function (route) {
        var id = +route.params['id'];
        return this.cs.getContact(id);
    };
    return ContactDetailResolver;
}());
ContactDetailResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [contacts_service_1.ContactsService, router_1.Router])
], ContactDetailResolver);
exports.ContactDetailResolver = ContactDetailResolver;
//# sourceMappingURL=contacts-detail-resolver.service.js.map