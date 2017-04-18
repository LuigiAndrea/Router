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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var name_user_service_1 = require("./name-user-service");
var guard_services_1 = require("./guard-services");
var _1 = require("./");
//modules
var contacts_module_1 = require("../contacts/contacts.module");
var login_module_1 = require("../login/login.module");
var CoreModule = CoreModule_1 = (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule.forRoot = function (config) {
        return {
            ngModule: CoreModule_1,
            providers: [
                { provide: name_user_service_1.NameConfig, useValue: config }
            ]
        };
    };
    return CoreModule;
}());
CoreModule = CoreModule_1 = __decorate([
    core_1.NgModule({
        imports: [contacts_module_1.ContactsModule, login_module_1.LoginModule, material_1.MaterialModule.forRoot()],
        declarations: [name_user_service_1.NameComponent, _1.UrlNotFound, _1.ConfirmDialogComponent],
        exports: [name_user_service_1.NameComponent],
        providers: [
            name_user_service_1.NameAppService, _1.TeamService, _1.DialogService,
            _1.AuthService, guard_services_1.AuthGuard, guard_services_1.CanDeactivateGuard
        ],
        entryComponents: [_1.ConfirmDialogComponent]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);
exports.CoreModule = CoreModule;
var CoreModule_1;
//# sourceMappingURL=core.module.js.map