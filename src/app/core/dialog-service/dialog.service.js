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
var material_1 = require("@angular/material");
var core_2 = require("../../core");
var DialogService = (function () {
    /*
     * Returns Obseravable resolving to `true`=confirm or `false`=cancel
     */
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.confirm = function (message) {
        var dialogRef = this.dialog.open(core_2.ConfirmDialogComponent, {
            width: '250',
            height: '200',
            disableClose: true
        });
        dialogRef.componentInstance.message = message || 'Is it OK?';
        return dialogRef.afterClosed();
    };
    ;
    return DialogService;
}());
DialogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [material_1.MdDialog])
], DialogService);
exports.DialogService = DialogService;
//# sourceMappingURL=dialog.service.js.map