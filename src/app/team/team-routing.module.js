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
var team_list_def_component_1 = require("./team-list-def.component");
var team_list_component_1 = require("./team-list.component");
var team_list_children_component_1 = require("./team-list-children.component");
var guard_services_1 = require("../core/guard-services");
var routes = [
    {
        path: '',
        children: [
            {
                path: 'project',
                redirectTo: '/team/noProject'
            },
            {
                path: '',
                component: team_list_component_1.TeamListComponent,
                canDeactivate: [guard_services_1.CanDeactivateGuard],
                children: [
                    {
                        path: '',
                        component: team_list_children_component_1.TeamListChildrenComponent,
                    },
                    {
                        path: '',
                        component: team_list_def_component_1.TeamListDefComponent,
                        outlet: 'aux'
                    }
                ]
            }
        ]
    }
];
var TeamRoutingModule = (function () {
    function TeamRoutingModule() {
    }
    return TeamRoutingModule;
}());
TeamRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
    }),
    __metadata("design:paramtypes", [])
], TeamRoutingModule);
exports.TeamRoutingModule = TeamRoutingModule;
exports.routedComponents = [
    team_list_def_component_1.TeamListDefComponent,
    team_list_component_1.TeamListComponent,
    team_list_children_component_1.TeamListChildrenComponent
];
//# sourceMappingURL=team-routing.module.js.map