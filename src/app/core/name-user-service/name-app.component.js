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
// Exact copy of app/title.component.ts except import UserService from shared
var core_1 = require("@angular/core");
var name_app_service_1 = require("./name-app.service");
var NameComponent = (function () {
    function NameComponent(nameService) {
        this.nameService = nameService;
        this.userName = '';
        this.name = '';
        this.name = nameService.appName;
    }
    return NameComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NameComponent.prototype, "userName", void 0);
NameComponent = __decorate([
    core_1.Component({
        selector: 'app-name',
        templateUrl: 'app/core/name-user-service/name-app.component.html',
    }),
    __metadata("design:paramtypes", [name_app_service_1.NameAppService])
], NameComponent);
exports.NameComponent = NameComponent;
//# sourceMappingURL=name-app.component.js.map