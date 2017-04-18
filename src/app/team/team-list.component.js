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
var core_2 = require("../core");
var TeamListComponent = (function () {
    function TeamListComponent(router, dialogService, teamService) {
        this.router = router;
        this.dialogService = dialogService;
        this.teamService = teamService;
    }
    TeamListComponent.prototype.ngOnInit = function () {
        var nam = this.teamService.retriveName();
        this.teamComponentName = !nam ? 'Team' : nam;
    };
    TeamListComponent.prototype.changeName = function () {
        this.teamComponentName = this.beforeEdit;
        this.teamService.saveTeam(this.teamComponentName);
    };
    TeamListComponent.prototype.cancel = function () {
        this.router.navigate(['contacts']);
    };
    TeamListComponent.prototype.canDeactivate = function () {
        if (!this.beforeEdit || this.beforeEdit === this.teamComponentName) {
            return true;
        }
        return this.dialogService.confirm('Discard changes?');
    };
    return TeamListComponent;
}());
TeamListComponent = __decorate([
    core_1.Component({
        selector: 'team-list-component',
        template: "\n    <h1>I am {{teamComponentName}} Component</h1>\n    <router-outlet></router-outlet>\n    <router-outlet name='aux'></router-outlet>\n     <div>\n        <label>Name Team: </label>\n        <input [(ngModel)]=\"beforeEdit\" placeholder=\"team name\"/>       \n        <button (click)=\"changeName()\">Change Name</button>\n        <button (click)=\"cancel()\">Cancel</button>\n    </div> \n  "
    }),
    __metadata("design:paramtypes", [router_1.Router, core_2.DialogService, core_2.TeamService])
], TeamListComponent);
exports.TeamListComponent = TeamListComponent;
//# sourceMappingURL=team-list.component.js.map