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
var core_1 = require("../core");
var modal_actions_1 = require("./modal.actions");
var ModalContentComponent = (function () {
    function ModalContentComponent($attrs, modalActionCreator) {
        this.$attrs = $attrs;
        this.modalActionCreator = modalActionCreator;
        this.storeOnChange = function (state) { };
    }
    ModalContentComponent = __decorate([
        core_1.Component({
            template: require("./modal-content.component.html"),
            styles: [require("./modal-content.component.css")],
            selector: "modal-content",
            transclude: true,
            viewProviders: ["$attrs", "modalActionCreator"]
        }), 
        __metadata('design:paramtypes', [Object, modal_actions_1.ModalActionCreator])
    ], ModalContentComponent);
    return ModalContentComponent;
}());
exports.ModalContentComponent = ModalContentComponent;
//# sourceMappingURL=modal-content.component.js.map