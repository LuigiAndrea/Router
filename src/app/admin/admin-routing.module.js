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
var admin_dashboard_component_1 = require("./admin-dashboard.component");
var manage_contacts_component_1 = require("./manage-contacts.component");
var manage_team_component_1 = require("./manage-team.component");
var admin_component_1 = require("./admin.component");
var guard_services_1 = require("../core/guard-services");
var routes = [
    {
        path: '',
        component: admin_component_1.AdminComponent,
        canActivate: [guard_services_1.AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [guard_services_1.AuthGuard],
                children: [
                    { path: 'manageContacts', component: manage_contacts_component_1.ManageContactsComponent },
                    { path: 'manageTeam', component: manage_team_component_1.ManageTeamComponent },
                    { path: '', component: admin_dashboard_component_1.AdminDashboardComponent }
                ]
            }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    }),
    __metadata("design:paramtypes", [])
], AdminRoutingModule);
exports.AdminRoutingModule = AdminRoutingModule;
exports.routedComponents = [
    admin_dashboard_component_1.AdminDashboardComponent,
    manage_contacts_component_1.ManageContactsComponent,
    manage_team_component_1.ManageTeamComponent,
    admin_component_1.AdminComponent
];
//# sourceMappingURL=admin-routing.module.js.map