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
var nextId = 1;
var NameConfig = (function () {
    function NameConfig() {
    }
    return NameConfig;
}());
exports.NameConfig = NameConfig;
var NameAppService = (function () {
    function NameAppService(config) {
        this.id = nextId++;
        this._appName = 'Default Name';
        if (config) {
            this._appName = config.appName;
        }
    }
    Object.defineProperty(NameAppService.prototype, "appName", {
        get: function () {
            // Demo: add a suffix if this service has been created more than once
            var suffix = this.id > 1 ? " times " + this.id : '';
            return this._appName + suffix;
        },
        enumerable: true,
        configurable: true
    });
    return NameAppService;
}());
NameAppService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [NameConfig])
], NameAppService);
exports.NameAppService = NameAppService;
//# sourceMappingURL=name-app.service.js.map